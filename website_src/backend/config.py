from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Render will use DATABASE_URL instead of these fields.
    # These are kept optional for local development.
    DATABASE_URL: str | None = None

    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
