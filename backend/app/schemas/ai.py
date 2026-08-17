from pydantic import BaseModel


class AIRequest(BaseModel):
    symbol: str


class AIResponse(BaseModel):
    summary: str
    strengths: list[str]
    risks: list[str]
    outlook: str
    recommendation: str 