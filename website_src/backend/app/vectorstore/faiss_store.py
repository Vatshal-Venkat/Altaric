import faiss
import numpy as np
from typing import List, Dict

class FaissStore:
    def __init__(self, dim: int):
        self.dim = dim
        self.index = faiss.IndexFlatL2(dim)

        # Parallel metadata storage
        self.records: List[Dict] = []
        # Each record:
        # {
        #   "doc_id": str,
        #   "doc_name": str,
        #   "chunk_id": int,
        #   "text": str
        # }

    def add(
        self,
        embeddings: List[List[float]],
        texts: List[str],
        *,
        doc_id: str,
        doc_name: str
    ):
        vectors = np.array(embeddings).astype("float32")
        self.index.add(vectors)

        for i, text in enumerate(texts):
            self.records.append({
                "doc_id": doc_id,
                "doc_name": doc_name,
                "chunk_id": i,
                "text": text
            })

    def search(self, query_embedding: List[float], k: int = 5) -> List[Dict]:
        vector = np.array([query_embedding]).astype("float32")
        _, indices = self.index.search(vector, k)

        results = []
        for idx in indices[0]:
            if idx < len(self.records):
                results.append(self.records[idx])

        return results
