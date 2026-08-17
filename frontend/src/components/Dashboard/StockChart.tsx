import { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface HistoryData {
  date: string;
  close: number;
}

interface Props {
  symbol: string;
}

export default function StockChart({ symbol }: Props) {
  const [history, setHistory] = useState<HistoryData[]>([]);

  useEffect(() => {
    if (symbol) {
      fetchHistory();
    } else {
      setHistory([]);
    }
  }, [symbol]);

  async function fetchHistory() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/market/history/${symbol}`
      );

      const chartData: HistoryData[] = response.data.history.map(
        (item: any) => ({
          date: item.date,
          close: Number(item.close),
        })
      );

      console.log("Chart Data:", chartData);

      setHistory(chartData);
    } catch (err) {
      console.error(err);
      setHistory([]);
    }
  }

  // Nothing searched
  if (!symbol) {
    return (
      <div className="mt-8 rounded-xl bg-zinc-900 p-10 text-center text-zinc-400">
        <h2 className="mb-3 text-2xl font-bold text-white">
          Stock Price Chart
        </h2>

        <p>Search for a stock to view its 30-day price chart.</p>
      </div>
    );
  }

  // No history found
  if (history.length === 0) {
    return (
      <div className="mt-8 rounded-xl bg-zinc-900 p-10 text-center text-zinc-400">
        <h2 className="mb-3 text-2xl font-bold text-white">
          {symbol.toUpperCase()} - 30 Day Price Chart
        </h2>

        <p>Loading chart...</p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl bg-zinc-900 p-6 text-white">

      <h2 className="mb-6 text-2xl font-bold">
        {symbol.toUpperCase()} - 30 Day Price Chart
      </h2>

      <ResponsiveContainer width="100%" height={400}>

        <LineChart data={history}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />

          <YAxis
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="close"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
} 