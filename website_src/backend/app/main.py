from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine, Base
import app.models as models
import app.schemas as schemas
from fastapi.middleware.cors import CORSMiddleware

# (RAG routers can be enabled later)
# from app.api import rag_upload, rag_query

import os
import shutil
import smtplib
from email.message import EmailMessage
from datetime import datetime

from app.api import rag


FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")

app = FastAPI(title="Altaric Backend")

# -------------------------------
# SAFE DATABASE INITIALIZATION
# -------------------------------
@app.on_event("startup")
def on_startup():
    try:
        Base.metadata.create_all(bind=engine)
        print("✅ Database connected and tables ready")
    except Exception as e:
        # Do NOT crash the app if DB is down
        print("⚠️ Database not available at startup")
        print(e)

# Dependency: get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://altaric.com",
        "https://www.altaric.com",
        "https://api.altaric.com",
        "https://altaric.vercel.app",
        "https://altaric-backend.onrender.com",
        FRONTEND_URL,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# MEETINGS (UNCHANGED)
# -------------------------------
@app.post("/meetings/", response_model=schemas.MeetingResponse)
def create_meeting(meeting: schemas.MeetingCreate, db: Session = Depends(get_db)):
    new_meeting = models.Meeting(**meeting.dict())
    db.add(new_meeting)
    db.commit()
    db.refresh(new_meeting)
    return new_meeting

@app.get("/meetings/", response_model=list[schemas.MeetingResponse])
def get_meetings(db: Session = Depends(get_db)):
    return db.query(models.Meeting).all()

@app.get("/meetings/{meeting_id}", response_model=schemas.MeetingResponse)
def get_meeting(meeting_id: int, db: Session = Depends(get_db)):
    meeting = db.query(models.Meeting).filter(models.Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=404, detail="Meeting not found")
    return meeting

@app.put("/meetings/{meeting_id}", response_model=schemas.MeetingResponse)
def update_meeting(meeting_id: int, updated: schemas.MeetingCreate, db: Session = Depends(get_db)):
    meeting = db.query(models.Meeting).filter(models.Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=404, detail="Meeting not found")

    for key, value in updated.dict().items():
        setattr(meeting, key, value)

    db.commit()
    db.refresh(meeting)
    return meeting

@app.delete("/meetings/{meeting_id}")
def delete_meeting(meeting_id: int, db: Session = Depends(get_db)):
    meeting = db.query(models.Meeting).filter(models.Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=404, detail="Meeting not found")

    db.delete(meeting)
    db.commit()
    return {"message": f"Meeting with ID {meeting_id} deleted"}

# -------------------------------
# CAREER APPLICATION
# -------------------------------
UPLOAD_DIR = "resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

APPLICATIONS = []  # in-memory (replace with DB later)

def send_admin_email(subject: str, body: str):
    if not SMTP_HOST:
        return

    msg = EmailMessage()
    msg["From"] = SMTP_USER
    msg["To"] = ADMIN_EMAIL
    msg["Subject"] = subject
    msg.set_content(body)

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(msg)

@app.post("/api/apply")
async def apply_for_role(
    role: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(""),
    resume: UploadFile = File(...)
):
    timestamp = datetime.utcnow().isoformat()
    filename = f"{role}_{name}_{resume.filename}".replace(" ", "_")
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    record = {
        "role": role,
        "name": name,
        "email": email,
        "message": message,
        "resume": filename,
        "submitted_at": timestamp,
    }

    APPLICATIONS.append(record)

    send_admin_email(
        subject=f"New Application: {role}",
        body=f"""
New Career Application Received

Role: {role}
Name: {name}
Email: {email}

Message:
{message}

Resume File:
{filename}

Submitted At:
{timestamp}
""",
    )

    return {"status": "success"}

# -------------------------------
# ADMIN REVIEW PANEL (API)
# -------------------------------
@app.get("/admin/applications")
def get_applications():
    return APPLICATIONS

# -------------------------------
# HEALTH CHECK
# -------------------------------
@app.get("/health")
def health_check():
    return {"status": "ok"}

# -------------------------------
# RAG ROUTERS (ENABLE LATER)
# -------------------------------
app.include_router(rag.router)

# app.include_router(rag_upload.router, prefix="/api")
# app.include_router(rag_query.router, prefix="/api")
