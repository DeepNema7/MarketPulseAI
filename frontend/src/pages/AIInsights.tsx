import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  symbol: string;
}

interface AIResponse {
  summary: string;
}

export default function AIInsights({ symbol }: Props) {
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!symbol) {
      setInsight("");
      return;
    }

    fetchInsights();
  }, [symbol]);

  async function fetchInsights() {
    try {
      setLoading(true);

      const response = await axios.post<AIResponse>(
        "http://127.0.0.1:8000/ai/insights",
        {
          symbol,
        }
      );

      setInsight(response.data.summary);
    } catch (error) {
      console.error(error);
      setInsight("Failed to generate AI insights.");
    } finally {
      setLoading(false);
    }
  }

  if (!symbol) {
    return (
      <div className="mt-8 rounded-xl bg-zinc-900 p-8 text-center text-zinc-400">
        <h2 className="mb-3 text-2xl font-bold text-white">
          AI Insights
        </h2>

        <p>Search for a stock to generate AI-powered insights.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl bg-zinc-900 p-6 text-white">
      <h2 className="mb-6 text-2xl font-bold">
        AI Insights - {symbol}
      </h2>

      {loading ? (
        <p className="text-blue-400">Generating AI analysis...</p>
      ) : (
        <div className="whitespace-pre-wrap leading-8 text-zinc-200">
          {insight}
        </div>
      )}
    </div>
  );
} 