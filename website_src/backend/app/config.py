from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Render will use DATABASE_URL instead of these fields.
    # These are kept optional for local development.
    DATABASE_URL: str | None = None

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
        extra="allow"   # 🔑 Allow existing env vars without crashing
    )

settings = Settings()
