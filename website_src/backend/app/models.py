from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Meeting(Base):
    __tablename__ = "meetings"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    company = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    service = Column(String, nullable=True)
    project_details = Column(Text, nullable=False)
