from pydantic import BaseModel


class CompanyResponse(BaseModel):
    symbol: str
    company: str
    sector: str
    industry: str
    country: str
    website: str
    employees: int
    business_summary: str