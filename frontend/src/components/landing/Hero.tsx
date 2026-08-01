import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-zinc-950 to-purple-700/20" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm text-blue-300"
        >
          🚀 AI Powered Financial Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl"
        >
          Smarter Investing
          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Track Stocks, Crypto and Market Trends.
          Ask AI anything about the market.
          Build watchlists, portfolios and receive intelligent insights—
          all from one beautiful platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-lg text-white transition hover:border-zinc-500"
          >
            Login
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
            <TrendingUp className="mb-4 text-green-400" />
            <h2 className="text-3xl font-bold text-white">5000+</h2>
            <p className="mt-2 text-zinc-400">
              Stocks & ETFs
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
            <Sparkles className="mb-4 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              AI Insights
            </h2>
            <p className="mt-2 text-zinc-400">
              Personalized market intelligence
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
            <TrendingUp className="mb-4 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">
              Real-Time
            </h2>
            <p className="mt-2 text-zinc-400">
              Market monitoring & analytics
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}