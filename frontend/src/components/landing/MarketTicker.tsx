import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
  { symbol: "AAPL", price: "$229.15", change: "+1.42%", up: true },
  { symbol: "MSFT", price: "$519.23", change: "+0.88%", up: true },
  { symbol: "NVDA", price: "$181.66", change: "+2.41%", up: true },
  { symbol: "TSLA", price: "$327.40", change: "-0.82%", up: false },
  { symbol: "BTC", price: "$118,240", change: "+3.15%", up: true },
  { symbol: "ETH", price: "$4,520", change: "+2.04%", up: true },
  { symbol: "SOL", price: "$188.55", change: "-1.12%", up: false },
  { symbol: "RELIANCE", price: "₹3,021", change: "+0.73%", up: true },
];

export default function MarketTicker() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-900 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...marketData, ...marketData].map((item, index) => (
          <div
            key={index}
            className="mx-6 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3"
          >
            <span className="font-semibold text-white">
              {item.symbol}
            </span>

            <span className="text-zinc-300">
              {item.price}
            </span>

            <span
              className={`flex items-center gap-1 font-semibold ${
                item.up ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.up ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}