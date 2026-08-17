import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import MarketTicker from "../components/landing/MarketTicker";
import Features from "../components/landing/features";
import DashboardPreview from "../components/landing/DashboardPreview";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <Hero />
      <MarketTicker />
      <Features />
      <DashboardPreview />
      <CTA />
      <Footer />
    </div>
  );
}