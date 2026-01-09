from fastapi import APIRouter, UploadFile, File
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from collections import defaultdict
import os
import shutil
import uuid
import json

from app.ingestion.text import load_text
from app.embeddings.embedder import Embedder
from app.vectorstore.faiss_store import FaissStore
from app.agent.generator import stream_answer

router = APIRouter(
    prefix="/rag",
    tags=["RAG"]
)

UPLOAD_DIR = "rag_docs"
os.makedirs(UPLOAD_DIR, exist_ok=True)

embedder = Embedder()
vector_store = FaissStore(dim=384)

# -------------------------------
# Health
# -------------------------------
@router.get("/ping")
def rag_ping():
    return {"rag": "alive"}

# -------------------------------
# Upload & ingest (with doc metadata)
# -------------------------------
@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    chunks = load_text(file_path)
    embeddings = embedder.embed(chunks)

    doc_id = str(uuid.uuid4())

    vector_store.add(
        embeddings,
        chunks,
        doc_id=doc_id,
        doc_name=file.filename
    )

    return {
        "status": "ingested",
        "document": {
            "id": doc_id,
            "name": file.filename,
            "chunks": len(chunks)
        }
    }

# -------------------------------
# Streaming RAG query (grouped sources)
# -------------------------------
class QueryRequest(BaseModel):
    question: str
    k: int = 5

@router.post("/query")
def query_rag(req: QueryRequest):
    query_embedding = embedder.embed([req.question])[0]
    raw_sources = vector_store.search(query_embedding, k=req.k)

    # -------- group sources by document --------
    grouped = defaultdict(lambda: {
        "doc_name": None,
        "chunks": []
    })

    for s in raw_sources:
        grouped[s["doc_id"]]["doc_name"] = s["doc_name"]
        grouped[s["doc_id"]]["chunks"].append({
            "chunk_id": s["chunk_id"],
            "text": s["text"]
        })

    documents = [
        {
            "doc_id": doc_id,
            "doc_name": data["doc_name"],
            "chunks": data["chunks"]
        }
        for doc_id, data in grouped.items()
    ]

    # -------- streaming answer --------
    def token_stream():
        for token in stream_answer(
            question=req.question,
            sources=raw_sources
        ):
            yield token

    return StreamingResponse(
        token_stream(),
        media_type="text/plain",
        headers={
            # JSON so frontend can parse safely
            "X-Documents": json.dumps(documents)
        }
    )
