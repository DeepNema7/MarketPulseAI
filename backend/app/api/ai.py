from fastapi import APIRouter, HTTPException

from app.schemas.ai import (
    AIRequest,
    AIResponse
)

from app.services.ai_service import generate_ai_summary

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post(
    "/insights",
    response_model=AIResponse
)
def ai_insights(request: AIRequest):

    try:
        return generate_ai_summary(request.symbol)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        ) 