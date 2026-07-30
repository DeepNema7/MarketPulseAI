import api from "./api";

export async function getMarketSummary() {
  const response = await api.get("/market/summary");
  return response.data;
}