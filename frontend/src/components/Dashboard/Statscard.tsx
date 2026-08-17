import {
  DollarSign,
  TrendingUp,
  Brain,
  Star,
} from "lucide-react";

const cards = [
  {
    title: "Portfolio",
    value: "$0.00",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    title: "Today's Gain",
    value: "0.00%",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  {
    title: "AI Confidence",
    value: "--",
    icon: Brain,
    color: "text-cyan-400",
  },
  {
    title: "Watchlist",
    value: "0",
    icon: Star,
    color: "text-yellow-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <Icon className={card.color} size={28} />

            <p className="mt-5 text-zinc-400">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}