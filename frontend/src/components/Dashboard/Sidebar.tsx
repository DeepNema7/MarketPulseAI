import {
  LayoutDashboard,
  Briefcase,
  Star,
  Brain,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Portfolio", icon: Briefcase, path: "/portfolio" },
  { name: "Watchlist", icon: Star, path: "/watchlist" },
  { name: "AI Insights", icon: Brain, path: "/ai-insights" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-10">
        MarketPulseAI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl p-3 transition ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button className="mt-10 w-full rounded-xl border border-red-500 p-3 text-red-400 hover:bg-red-500 hover:text-white">
        <LogOut size={18} className="inline mr-2" />
        Logout
      </button>
    </aside>
  );
}