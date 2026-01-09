import os
from typing import Iterator, List, Dict
import google.generativeai as genai

# -----------------------------
# Gemini Configuration
# -----------------------------

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

MODEL_NAME = "gemini-2.5-pro"

SYSTEM_PROMPT = """
You are a technical assistant.

Rules:
- Answer ONLY using the provided context.
- Do NOT use outside knowledge.
- If the answer is not present in the context, respond exactly with:
  "I don't know based on the provided documents."
- Be precise and concise.
"""

# -----------------------------
# Streaming Answer Generator
# -----------------------------

def stream_answer(
    question: str,
    sources: List[Dict]
) -> Iterator[str]:
    """
    Streams an answer token-by-token using Gemini,
    strictly grounded in retrieved RAG sources.
    """

    # Safety: no sources = no answer
    if not sources:
        yield "I don't know based on the provided documents."
        return

    # Build context safely (NO 'id' assumption)
    context_text = "\n\n".join(
        f"[Source {s.get('source', s.get('metadata', {}).get('source', 'unknown'))}]\n{s.get('text', '')}"
        for s in sources
        if s.get("text")
    )

    # Extra guard: empty context after filtering
    if not context_text.strip():
        yield "I don't know based on the provided documents."
        return

    model = genai.GenerativeModel(
        model_name=MODEL_NAME,
        system_instruction=SYSTEM_PROMPT
    )

    response = model.generate_content(
        f"""
Context:
{context_text}

Question:
{question}
""",
        generation_config={
            "temperature": 0.2,
            "max_output_tokens": 512
        },
        stream=True
    )

    # Token streaming (critical for FastAPI StreamingResponse)
    for chunk in response:
        if chunk.text:
            yield chunk.text
