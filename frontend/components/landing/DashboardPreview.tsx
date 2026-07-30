export default function DashboardPreview() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-400">
            Monitor markets, manage your portfolio and receive AI-powered insights.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-800 p-6">
              <p className="text-slate-400">Portfolio Value</p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                ₹12,48,250
              </h3>

              <span className="mt-4 inline-block rounded bg-green-500/20 px-3 py-1 text-green-400">
                +4.82%
              </span>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <p className="text-slate-400">AI Confidence</p>

              <h3 className="mt-3 text-3xl font-bold text-cyan-400">
                94%
              </h3>

              <p className="mt-2 text-slate-500">
                Strong Buy Signal
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <p className="text-slate-400">Market Status</p>

              <h3 className="mt-3 text-3xl font-bold text-green-400">
                Bullish
              </h3>

              <p className="mt-2 text-slate-500">
                AI Trend Analysis
              </p>
            </div>

          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-slate-800 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-xl font-semibold text-white">
                Trending Assets
              </h3>

              <span className="rounded bg-cyan-500/20 px-3 py-1 text-cyan-400">
                Live
              </span>

            </div>

            <table className="w-full text-left">

              <thead className="text-slate-500">

                <tr>

                  <th>Symbol</th>

                  <th>Price</th>

                  <th>Change</th>

                </tr>

              </thead>

              <tbody className="text-white">

                <tr className="border-t border-slate-700">

                  <td className="py-4">AAPL</td>

                  <td>$231.40</td>

                  <td className="text-green-400">+2.48%</td>

                </tr>

                <tr className="border-t border-slate-700">

                  <td className="py-4">NVDA</td>

                  <td>$186.82</td>

                  <td className="text-green-400">+5.14%</td>

                </tr>

                <tr className="border-t border-slate-700">

                  <td className="py-4">BTC</td>

                  <td>$118,240</td>

                  <td className="text-green-400">+1.93%</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}