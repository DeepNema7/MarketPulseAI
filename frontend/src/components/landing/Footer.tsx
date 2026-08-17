import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">

        <div className="flex items-center gap-3">

          <BarChart3 className="text-blue-500" />

          <div>
            <h2 className="text-xl font-bold text-white">
              MarketPulseAI
            </h2>

            <p className="text-sm text-zinc-400">
              AI Powered Financial Intelligence
            </p>
          </div>

        </div>

        <div className="flex gap-8 text-zinc-400">

          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#dashboard" className="hover:text-white">
            Dashboard
          </a>

          <a href="#">
            Privacy
          </a>

          <a href="#">
            Contact
          </a>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-zinc-500">
        © 2026 MarketPulseAI. All rights reserved.
      </div>

    </footer>
  );
}