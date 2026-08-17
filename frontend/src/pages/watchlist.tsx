import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TopNavbar from "../components/Dashboard/TopNavbar";

import {
  getWatchlistData,
  removeFromWatchlist,
} from "../Services/WatchlistService";

interface WatchlistStock {
  symbol: string;
  last_price: number;
  currency: string;
}

export default function Watchlist() {
  const [stocks, setStocks] = useState<WatchlistStock[]>([]);

  async function loadData() {
    try {
      const data = await getWatchlistData();
      setStocks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <TopNavbar />

      <main className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          ⭐ Watchlist
        </h1>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden">

          <table className="w-full">

            <thead>
              <tr className="border-b border-zinc-700">

                <th className="text-left p-5">Symbol</th>

                <th className="text-left p-5">Live Price</th>

                <th className="text-left p-5">Currency</th>

                <th className="text-left p-5">Action</th>

              </tr>
            </thead>

            <tbody>

              {stocks.length > 0 ? (
                stocks.map((stock) => (
                  <tr
                    key={stock.symbol}
                    className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                  >
                    <td className="p-5">

                      <Link
                        to={`/dashboard?symbol=${stock.symbol}`}
                        className="font-bold text-blue-400 hover:text-blue-300"
                      >
                        {stock.symbol}
                      </Link>

                    </td>

                    <td className="p-5 font-semibold">
                      ${stock.last_price.toFixed(2)}
                    </td>

                    <td className="p-5">
                      {stock.currency}
                    </td>

                    <td className="p-5">

                      <button
                        onClick={async () => {
                          removeFromWatchlist(stock.symbol);
                          await loadData();
                        }}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                      >
                        Remove
                      </button>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center text-zinc-400 py-10"
                  >
                    Your watchlist is empty.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
} 