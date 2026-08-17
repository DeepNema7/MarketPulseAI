from pydantic import BaseModel
from typing import Optional

class CompanyResponse(BaseModel):
    symbol: str
    name: str
    sector: Optional[str] = None
    industry: Optional[str] = None
    country: Optional[str] = None
    website: Optional[str] = None
    market_cap: Optional[int] = None
    employee_count: Optional[int] = None 
 