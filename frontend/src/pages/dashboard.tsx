import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import TopNavbar from "../components/Dashboard/TopNavbar";
import MarketTable from "../components/Dashboard/Markettable";
import StockChart from "../components/Dashboard/StockChart";
import CompanyCard from "../components/Dashboard/CompanyCard";

export default function Dashboard() {
  const [searchParams] = useSearchParams();

  // Read symbol from URL, e.g. /dashboard?symbol=AAPL
  const initialSymbol = searchParams.get("symbol") || "";

  const [selectedSymbol, setSelectedSymbol] = useState(initialSymbol);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <TopNavbar />

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Live Market */}
        <MarketTable
          selectedSymbol={selectedSymbol}
          setSelectedSymbol={setSelectedSymbol}
        />

        {/* Stock Chart */}
        <StockChart symbol={selectedSymbol} />

        {/* Company Information */}
        <div className="grid grid-cols-1 gap-8">
          <CompanyCard symbol={selectedSymbol} />
        </div>
      </main>
    </div>
  );
} 