const news = [
  "NVIDIA reaches another all-time high after AI demand surges.",
  "Bitcoin remains above major support levels.",
  "Apple expected to announce new AI-powered features.",
  "Microsoft expands Copilot across enterprise products.",
];

export default function NewsFeed() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Market News
      </h2>

      <div className="space-y-5">

        {news.map((item, index) => (

          <div
            key={index}
            className="rounded-xl bg-zinc-800 p-4"
          >

            <p className="text-zinc-300">
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}