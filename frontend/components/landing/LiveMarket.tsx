"use client";

import { useEffect, useState } from "react";
import { getMarketSummary } from "@/lib/market";

interface Stock {
  symbol: string;
  last_price: number;
  currency: string;
}

interface Crypto {
  symbol: string;
  price: number;
  currency: string;
}

interface MarketData {
  stocks: Stock[];
  crypto: Crypto[];
}

export default function LiveMarket() {
  const [market, setMarket] = useState<MarketData | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getMarketSummary();
      setMarket(data);
    }

    load();
  }, []);

  if (!market) {
    return (
      <div className="py-20 text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-5xl font-bold text-white">
          Live Market
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="mb-6 text-2xl font-bold text-white">
              Stocks
            </h3>

            {market.stocks.map((stock) => (
              <div
                key={stock.symbol}
                className="mb-4 flex justify-between border-b border-slate-700 pb-3"
              >
                <span className="text-white">{stock.symbol}</span>

                <span className="text-cyan-400">
                  ${stock.last_price.toFixed(2)}
                </span>
              </div>
            ))}

          </div>

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="mb-6 text-2xl font-bold text-white">
              Crypto
            </h3>

            {market.crypto.map((coin) => (
              <div
                key={coin.symbol}
                className="mb-4 flex justify-between border-b border-slate-700 pb-3"
              >
                <span className="text-white">{coin.symbol}</span>

                <span className="text-green-400">
                  ${coin.price.toLocaleString()}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}