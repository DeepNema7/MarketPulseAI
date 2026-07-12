from pydantic import BaseModel
from typing import Optional


class CompanyResponse(BaseModel):

    symbol: str

    name: Optional[str] = None

    sector: Optional[str] = None

    industry: Optional[str] = None

    country: Optional[str] = None

    website: Optional[str] = None 