from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models, schemas
from fastapi.middleware.cors import CORSMiddleware

import os
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

# Create tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI()

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
    allow_origins=[FRONTEND_URL],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------
# CREATE (POST)
# -------------------------------
@app.post("/meetings/", response_model=schemas.MeetingResponse)
def create_meeting(meeting: schemas.MeetingCreate, db: Session = Depends(get_db)):
    new_meeting = models.Meeting(**meeting.dict())
    db.add(new_meeting)
    db.commit()
    db.refresh(new_meeting)
    return new_meeting


# -------------------------------
# READ ALL (GET)
# -------------------------------
@app.get("/meetings/", response_model=list[schemas.MeetingResponse])
def get_meetings(db: Session = Depends(get_db)):
    return db.query(models.Meeting).all()


# -------------------------------
# READ ONE (GET by ID)
# -------------------------------
@app.get("/meetings/{meeting_id}", response_model=schemas.MeetingResponse)
def get_meeting(meeting_id: int, db: Session = Depends(get_db)):
    meeting = db.query(models.Meeting).filter(models.Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=404, detail="Meeting not found")
    return meeting


# -------------------------------
# UPDATE (PUT)
# -------------------------------
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


# -------------------------------
# DELETE (DELETE)
# -------------------------------
@app.delete("/meetings/{meeting_id}")
def delete_meeting(meeting_id: int, db: Session = Depends(get_db)):
    meeting = db.query(models.Meeting).filter(models.Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=404, detail="Meeting not found")

    db.delete(meeting)
    db.commit()
    return {"message": f"Meeting with ID {meeting_id} deleted"}
