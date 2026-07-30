import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          MarketPulse<span className="text-cyan-400">AI</span>
        </h1>

        <nav className="hidden gap-8 text-slate-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/watchlist">Watchlist</Link>
        </nav>

        <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400">
          Get Started
        </button>
      </div>
    </header>
  );
}