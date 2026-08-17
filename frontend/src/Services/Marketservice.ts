import API from "./api";

export async function getStock(symbol: string) {
  const response = await fetch(API.stock(symbol));

  if (!response.ok) {
    throw new Error("Failed to fetch stock");
  }

  return response.json();
}

export async function searchStock(symbol: string) {
  const response = await fetch(API.search(symbol));

  if (!response.ok) {
    throw new Error("Failed to fetch stock");
  }

  return response.json();
}

export async function getCompanyInfo(symbol: string) {
  const response = await fetch(API.company(symbol));

  if (!response.ok) {
    throw new Error("Failed to fetch company");
  }

  return response.json();
}

export async function getHistory(symbol: string) {
  const response = await fetch(API.history(symbol));

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return response.json();
}

export async function getMarketSummary() {
  const response = await fetch(API.summary);

  if (!response.ok) {
    throw new Error("Failed to fetch market summary");
  }

  return response.json();
}

export async function getCrypto(symbol: string) {
  const response = await fetch(API.crypto(symbol));

  if (!response.ok) {
    throw new Error("Failed to fetch crypto");
  }

  return response.json();
} 