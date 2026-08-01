import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  BrainCircuit,
  Wallet,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Dashboard Preview
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Beautiful. Fast. Intelligent.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Experience a modern AI-powered financial dashboard
            designed to help you make smarter investment decisions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl"
        >
          {/* Top Cards */}
          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-zinc-950 p-6">
              <Wallet className="mb-4 text-blue-400" />
              <p className="text-zinc-400">Portfolio Value</p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                $152,420
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6">
              <TrendingUp className="mb-4 text-green-400" />
              <p className="text-zinc-400">Today's Gain</p>
              <h3 className="mt-2 text-3xl font-bold text-green-400">
                +4.23%
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6">
              <TrendingDown className="mb-4 text-red-400" />
              <p className="text-zinc-400">Market Risk</p>
              <h3 className="mt-2 text-3xl font-bold text-red-400">
                Medium
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6">
              <BrainCircuit className="mb-4 text-cyan-400" />
              <p className="text-zinc-400">AI Confidence</p>
              <h3 className="mt-2 text-3xl font-bold text-cyan-400">
                94%
              </h3>
            </div>

          </div>

          {/* Fake Chart */}
          <div className="mt-10 rounded-2xl bg-zinc-950 p-8">
            <h3 className="mb-8 text-xl font-semibold text-white">
              Portfolio Growth
            </h3>

            <div className="flex h-72 items-end justify-between gap-3">

              {[30, 40, 35, 55, 60, 52, 70, 80, 75, 95, 110, 125].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                  />
                )
              )}

            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl bg-zinc-950 p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">
                Watchlist
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span className="text-white">AAPL</span>
                  <span className="text-green-400">+2.4%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white">NVDA</span>
                  <span className="text-green-400">+4.1%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white">BTC</span>
                  <span className="text-green-400">+3.9%</span>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">
                AI Insight
              </h3>

              <p className="leading-8 text-zinc-400">
                AI predicts strong momentum in technology stocks over
                the coming weeks. NVIDIA and Microsoft continue to
                show positive technical indicators while Bitcoin
                remains bullish above key support levels.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}