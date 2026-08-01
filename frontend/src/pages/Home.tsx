import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import MarketTicker from "../components/landing/MarketTicker";
import Features from "../components/landing/features";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <Hero />
      <MarketTicker />
      <Features />
    </div>
  );
} 