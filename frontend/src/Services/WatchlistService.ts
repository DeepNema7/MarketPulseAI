import { getStock } from "./Marketservice";

const STORAGE_KEY = "marketpulse_watchlist";

export function getWatchlist(): string[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWatchlist(list: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addToWatchlist(symbol: string) {
  const list = getWatchlist();

  if (!list.includes(symbol.toUpperCase())) {
    list.push(symbol.toUpperCase());
    saveWatchlist(list);
  }
}

export function removeFromWatchlist(symbol: string) {
  const list = getWatchlist().filter(
    (item) => item !== symbol.toUpperCase()
  );

  saveWatchlist(list);
}

export async function getWatchlistData() {
  const list = getWatchlist();

  const stocks = await Promise.all(
    list.map((symbol) => getStock(symbol))
  );

  return stocks;
}