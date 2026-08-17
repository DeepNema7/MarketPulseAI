import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-5">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-4 text-zinc-500"
        />

        <input
          placeholder="Search Stocks, Crypto..."
          className="w-full rounded-xl bg-zinc-900 py-3 pl-12 pr-4 text-white outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell className="cursor-pointer" />

        <div className="h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">
          D
        </div>

      </div>

    </header>
  );
}