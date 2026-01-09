import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

# Prefer DATABASE_URL for Render
DATABASE_URL = settings.DATABASE_URL or os.getenv("DATABASE_URL")

if DATABASE_URL:
    SQLALCHEMY_DATABASE_URL = DATABASE_URL
else:
    # Fallback for local development if someone still uses .env structure
    DATABASE_HOSTNAME = os.getenv("DATABASE_HOSTNAME", "localhost")
    DATABASE_PORT = os.getenv("DATABASE_PORT", "5432")
    DATABASE_USERNAME = os.getenv("DATABASE_USERNAME", "postgres")
    DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD", "password")
    DATABASE_NAME = os.getenv("DATABASE_NAME", "altaric")

    SQLALCHEMY_DATABASE_URL = (
        f"postgresql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}"
        f"@{DATABASE_HOSTNAME}:{DATABASE_PORT}/{DATABASE_NAME}"
    )

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
