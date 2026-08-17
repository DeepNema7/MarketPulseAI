import { useEffect, useState } from "react";
import { getCompanyInfo } from "../../Services/Marketservice";

interface Props {
  symbol: string;
}

export default function CompanyCard({ symbol }: Props) {
  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    if (!symbol) {
      setCompany(null);
      return;
    }

    async function loadCompany() {
      try {
        const data = await getCompanyInfo(symbol);
        setCompany(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCompany();
  }, [symbol]);

  if (!symbol) {
    return (
      <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg min-h-[300px] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-white mb-5">
          Company Information
        </h2>

        <p className="text-zinc-400 text-lg">
          Search a stock to view company details.
        </p>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg min-h-[300px] flex justify-center items-center">
        <p className="text-zinc-400 text-lg">Loading Company...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8">
        Company Information
      </h2>

      <div className="grid grid-cols-2 gap-8">

        <div>
          <p className="text-zinc-400">Company</p>
           <p className="text-white font-semibold text-lg">
  {company.name}
</p>
        </div>

        <div>
          <p className="text-zinc-400">Ticker</p>
          <p className="text-white font-semibold text-lg">
            {company.symbol}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">Sector</p>
          <p className="text-white font-semibold text-lg">
            {company.sector}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">Industry</p>
          <p className="text-white font-semibold text-lg">
            {company.industry}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">Country</p>
          <p className="text-white font-semibold text-lg">
            {company.country}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">Employees</p>
          <p className="text-white font-semibold text-lg">
  {company.employee_count?.toLocaleString()}
</p>
        </div>

        <div>
          <p className="text-zinc-400">Market Cap</p>
          <p className="text-white font-semibold text-lg">
             {company.market_cap
  ? `$${(company.market_cap / 1_000_000_000_000).toFixed(2)} T`
  : "N/A"}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">Website</p>
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            {company.website}
          </a>
        </div>

      </div>
    </div>
  );
}