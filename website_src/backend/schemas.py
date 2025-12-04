from pydantic import BaseModel, EmailStr

class MeetingCreate(BaseModel):
    full_name: str
    email: EmailStr
    company: str | None = None
    phone: str | None = None
    service: str | None = None
    project_details: str

class MeetingResponse(MeetingCreate):
    id: int

    class Config:
        from_attributes = True

