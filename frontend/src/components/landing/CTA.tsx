import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-blue-600/30 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 p-14 text-center shadow-2xl"
        >

          <p className="font-semibold uppercase tracking-widest text-blue-100">
            Ready to Start?
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Your AI Financial Assistant
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Discover stocks, monitor crypto, analyze markets,
            build your portfolio and receive AI-powered insights —
            all from one platform.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              to="/register"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Create Free Account
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Login
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}