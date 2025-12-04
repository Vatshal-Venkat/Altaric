# Backend - FastAPI + PostgreSQL

## Overview
This is the backend for the Meetings App, built using **FastAPI** and **PostgreSQL**.  
It provides full CRUD operations for managing meetings.

---

## Prerequisites
- Python 3.10+
- PostgreSQL installed and running
- pip (Python package manager)
- Optional: virtual environment

---

## Folder Structure

```

backend/
├── app/                  # FastAPI application code (if using separate app folder)
├── main.py               # Entry point of the backend
├── database.py           # SQLAlchemy setup
├── config.py             # Environment configuration
├── models.py             # SQLAlchemy models
├── schemas.py            # Pydantic schemas
├── requirements.txt      # Python dependencies
└── .env                  # Environment variables

````

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone <project-repo-url>
cd backend
````

2. **Create a virtual environment** (optional but recommended)

```bash
python -m venv venv
# Activate the environment:
source venv/bin/activate      # Linux / macOS
venv\Scripts\activate         # Windows
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Configure environment variables**

* Copy `.env` from `.env.example` (or create `.env` if not provided)
* Example `.env`:

```
database_hostname=localhost
database_port=5432
database_username=your_db_user
database_password=your_db_password
database_name=your_db_name
```

5. **Set up the database**

* Create a PostgreSQL database with the name you provided in `.env`
* Tables will be created automatically when running the server (via `Base.metadata.create_all`)

6. **Run the backend**

```bash
uvicorn main:app --reload
```

* The server runs on `http://127.0.0.1:8000`

7. **API Documentation**

* Interactive docs: `http://127.0.0.1:8000/docs`
* Alternative docs: `http://127.0.0.1:8000/redoc`

---

## Notes

* Ensure PostgreSQL is running and credentials in `.env` are correct.
* All CRUD endpoints are under `/meetings/`:

  * **POST** `/meetings/` - Create a new meeting
  * **GET** `/meetings/` - Get all meetings
  * **GET** `/meetings/{id}` - Get a single meeting
  * **PUT** `/meetings/{id}` - Update a meeting
  * **DELETE** `/meetings/{id}` - Delete a meeting
* CORS is enabled for `http://localhost:5173` (React dev server). Adjust if frontend URL changes.