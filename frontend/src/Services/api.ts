const API_BASE_URL = "http://127.0.0.1:8000";

export const API = {
  stock: (symbol: string) =>
    `${API_BASE_URL}/market/stock/${symbol}`,

  company: (symbol: string) =>
    `${API_BASE_URL}/market/company/${symbol}`,

  history: (symbol: string) =>
    `${API_BASE_URL}/market/history/${symbol}`,

  stocks: `${API_BASE_URL}/market/stocks`,

  crypto: (symbol: string) =>
    `${API_BASE_URL}/market/crypto/${symbol}`,

  search: (symbol: string) =>
    `${API_BASE_URL}/market/search/${symbol}`,

  summary: `${API_BASE_URL}/market/summary`,
};

export default API;