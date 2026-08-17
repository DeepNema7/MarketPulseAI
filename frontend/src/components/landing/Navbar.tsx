import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <BarChart3 className="h-8 w-8 text-blue-500" />

          <span className="text-2xl font-bold text-white">
            MarketPulseAI
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-zinc-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-zinc-300 transition hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/portfolio"
            className="text-zinc-300 transition hover:text-white"
          >
            Portfolio
          </Link>

          <Link
            to="/watchlist"
            className="text-zinc-300 transition hover:text-white"
          >
            Watchlist
          </Link>

          

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="rounded-lg border border-zinc-700 px-5 py-2 font-medium text-white transition hover:border-blue-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
} 