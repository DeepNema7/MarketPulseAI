import {
  BrainCircuit,
  TrendingUp,
  Bitcoin,
  BriefcaseBusiness,
  Star,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Market Assistant",
    description:
      "Ask natural language questions about stocks, crypto, and market trends.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Market Tracking",
    description:
      "Monitor stocks and indices with live prices and interactive charts.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Analytics",
    description:
      "Track Bitcoin, Ethereum, Solana and hundreds of cryptocurrencies.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio Manager",
    description:
      "Manage investments and monitor profit/loss from one dashboard.",
  },
  {
    icon: Star,
    title: "Smart Watchlists",
    description:
      "Save your favorite assets and receive personalized recommendations.",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description:
      "Stay informed with intelligent notifications and market updates.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            MarketPulseAI combines artificial intelligence,
            financial analytics and beautiful visualization
            into one modern investing platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all hover:border-blue-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 transition group-hover:bg-blue-600">
                  <Icon
                    className="text-blue-400 group-hover:text-white"
                    size={32}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}