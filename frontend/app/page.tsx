import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Features from "@/components/landing/feature";
import LiveMarket from "@/components/landing/LiveMarket";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <LiveMarket />
    </>
  );
} 