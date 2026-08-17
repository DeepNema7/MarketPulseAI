import { TrendingUp } from "lucide-react";

export default function SearchResult() {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Apple Inc.
          </h2>

          <p className="text-zinc-400">
            AAPL • NASDAQ
          </p>

        </div>

        <TrendingUp
          size={42}
          className="text-green-400"
        />

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">

        <div>

          <p className="text-zinc-500">
            Price
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            $229.15
          </h3>

        </div>

        <div>

          <p className="text-zinc-500">
            Change
          </p>

          <h3 className="mt-2 text-green-400 text-2xl font-bold">
            +1.42%
          </h3>

        </div>

        <div>

          <p className="text-zinc-500">
            Market Cap
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            $3.4T
          </h3>

        </div>

        <div>

          <p className="text-zinc-500">
            Volume
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            58M
          </h3>

        </div>

      </div>

    </div>
  );
}