import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <BarChart3 className="h-8 w-8 text-blue-500" />

          <span className="text-3xl font-bold text-white">
            MarketPulseAI
          </span>
        </Link>

        <nav className="flex items-center gap-10 text-lg">

          <Link
            to="/dashboard"
            className="text-zinc-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/portfolio"
            className="text-zinc-300 hover:text-white"
          >
            Portfolio
          </Link>

          <Link
            to="/watchlist"
            className="text-zinc-300 hover:text-white"
          >
            Watchlist
          </Link>

        </nav>

      </div>
    </header>
  );
}