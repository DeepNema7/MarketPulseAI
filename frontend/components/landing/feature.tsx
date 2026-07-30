import { Brain, BarChart3, Wallet, Bell } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Insights",
    description:
      "Receive AI-powered analysis and actionable investment recommendations.",
  },
  {
    icon: BarChart3,
    title: "Live Market Data",
    description:
      "Track stocks, ETFs and cryptocurrencies with real-time updates.",
  },
  {
    icon: Wallet,
    title: "Portfolio Tracking",
    description:
      "Monitor profit & loss, allocations and overall portfolio performance.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified when important market movements happen.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built for Modern Investors
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Everything you need to research markets, analyze investments
            and manage your portfolio in one place.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="h-7 w-7 text-cyan-400" />

                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {feature.description}
                </p>

              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
}