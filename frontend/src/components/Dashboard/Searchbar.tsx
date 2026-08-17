import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xl">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        size={20}
      />

      <input
        type="text"
        placeholder="Search stocks (AAPL), crypto (BTC), companies..."
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-5 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}