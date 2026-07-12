from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "healthy",
        "service": "MarketPulseAI API",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }