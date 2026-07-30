export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <p className="mb-4 rounded-full border border-cyan-500 px-4 py-1 text-cyan-400">
        AI Powered Investment Intelligence
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
        Smarter Investing Starts With
        <span className="text-cyan-400"> MarketPulseAI</span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl text-slate-400">
        Track stocks, monitor crypto, manage your portfolio, receive AI-powered
        insights, and make informed investment decisions from one platform.
      </p>

      <div className="mt-12 flex gap-6">
        <button className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-400">
          Launch Dashboard
        </button>

        <button className="rounded-xl border border-slate-600 px-8 py-4 text-lg text-white transition hover:border-cyan-400">
          Live Demo
        </button>
      </div>
    </section>
  );
}