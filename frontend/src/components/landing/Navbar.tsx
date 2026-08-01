import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <BarChart3 className="h-7 w-7 text-blue-500" />
          <span>MarketPulseAI</span>
        </Link>

        <nav className="hidden gap-8 text-zinc-300 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#dashboard" className="hover:text-white">
            Dashboard
          </a>

          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
        </nav>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-zinc-700 px-5 py-2 text-white transition hover:border-zinc-500"
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