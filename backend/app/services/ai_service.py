import json

from google import genai
import yfinance as yf

from app.core.config import settings

client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def generate_ai_summary(symbol: str):

    symbol = symbol.strip().upper()

    company = yf.Ticker(symbol)

    info = company.info

    if not info or not info.get("longName"):
        return {
            "summary": "Company not found.",
            "strengths": [],
            "risks": [],
            "outlook": "",
            "recommendation": "N/A"
        }

    prompt = f"""
You are a professional stock market analyst.

Analyze this company.

Company: {info.get("longName")}
Ticker: {symbol}
Sector: {info.get("sector")}
Industry: {info.get("industry")}
Country: {info.get("country")}

Return ONLY valid JSON.

{{
    "summary": "Short company overview",
    "strengths": [
        "Strength 1",
        "Strength 2",
        "Strength 3"
    ],
    "risks": [
        "Risk 1",
        "Risk 2",
        "Risk 3"
    ],
    "outlook": "Long-term investment outlook",
    "recommendation": "Buy"
}}
"""

    response = client.models.generate_content(
        model="models/gemini-3.5-flash",
        contents=prompt,
    )

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()

    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    try:
        return json.loads(text)

    except Exception:

        return {
            "summary": response.text,
            "strengths": [],
            "risks": [],
            "outlook": "",
            "recommendation": "N/A"
        } 