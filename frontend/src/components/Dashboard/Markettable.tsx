import { useEffect, useState } from "react";
import axios from "axios";

import { searchStock } from "../../Services/Marketservice";
import { addToWatchlist } from "../../Services/WatchlistService";
import { Star } from "lucide-react";

interface Stock {
  symbol: string;
  last_price: number;
  currency: string;
  exchange: string;
}

interface Props {
  selectedSymbol: string;
  setSelectedSymbol: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarketTable({
  selectedSymbol,
  setSelectedSymbol,
}: Props) {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [symbol, setSymbol] = useState(selectedSymbol);

  useEffect(() => {
    setSymbol(selectedSymbol);
  }, [selectedSymbol]);

  useEffect(() => {
    fetchStocks();
  }, []);

  async function fetchStocks() {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/market/stocks"
      );

      if (Array.isArray(response.data)) {
        setStocks(response.data);
      } else {
        setStocks([]);
      }

      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load market data.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchStock() {
    if (!symbol.trim()) return;

    try {
      const stock = await searchStock(symbol);

      setStocks([stock]);

      setSelectedSymbol(stock.symbol);

      setError("");
    } catch (err) {
      console.error(err);
      alert("Stock not found");
    }
  }

  function resetMarket() {
    setSelectedSymbol("");
    setSymbol("");
    fetchStocks();
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-zinc-900 p-6 text-white">
        Loading Live Market...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-900 p-6 text-white">
        {error}
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-zinc-900 p-6 text-white">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Live Market
        </h2>

        <div className="flex gap-3">

          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchStock();
              }
            }}
            placeholder="Search Apple, Tesla, MSFT..."
            className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none"
          />

          <button
            onClick={fetchStock}
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700"
          >
            Search
          </button>

          <button
            onClick={resetMarket}
            className="rounded-lg bg-green-600 px-5 py-2 font-semibold hover:bg-green-700"
          >
            Reset
          </button>

        </div>

      </div>

      <table className="w-full">

        <thead>
          <tr className="border-b border-zinc-700">
            <th className="py-3 text-left">Symbol</th>
            <th className="py-3 text-left">Price</th>
            <th className="py-3 text-left">Currency</th>
            <th className="py-3 text-left">Exchange</th>
            <th className="py-3 text-center">Watchlist</th>
          </tr>
        </thead>

        <tbody>

          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <tr
                key={stock.symbol}
                className="border-b border-zinc-800"
              >
                <td className="py-4 font-semibold">
                  {stock.symbol}
                </td>

                <td>
                  ${stock.last_price.toFixed(2)}
                </td>

                <td>
                  {stock.currency}
                </td>

                <td>
                  {stock.exchange}
                </td>

                <td className="text-center">

                  <button
  onClick={() => {
    addToWatchlist(stock.symbol);
    alert(`${stock.symbol} added to Watchlist`);
  }}
  className="group rounded-full border border-zinc-700 bg-zinc-800 p-2 transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-500"
>
  <Star
    size={18}
    className="text-yellow-400 transition-all group-hover:fill-white group-hover:text-white"
  />
</button>
                  

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="py-6 text-center text-zinc-400"
              >
                No market data available.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
} 