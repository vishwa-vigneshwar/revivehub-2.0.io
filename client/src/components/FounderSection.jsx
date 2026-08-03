import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#050608] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-lime-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-[35px] bg-lime-500 blur-3xl opacity-20"></div>

            <img
              src="/founder.png"
              alt="Founder of ReviveHub"
              className="relative w-[340px] rounded-[35px] border border-lime-500/30 shadow-[0_0_60px_rgba(132,255,0,0.25)]"
            />

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-lime-500 px-5 py-2 font-bold text-black">
              Founder & CEO
            </div>

          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-5 py-2 text-sm tracking-[3px] text-lime-400">
            FOUNDER'S MESSAGE
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Vigneshwar S
          </h2>

          <p className="mt-3 text-lime-400 text-xl font-semibold">
            Founder & CEO — ReviveHub
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            At ReviveHub, our mission is simple:
            <span className="text-white font-semibold">
              {" "}
              Repair • Refurbish • Reuse.
            </span>

            <br /><br />

            Every electronic device deserves a second life.
            Instead of adding to e-waste, we believe in restoring,
            repairing and bringing technology back to life.

            <br /><br />

            Our goal is to build India's most trusted electronics
            refurbishment ecosystem while creating a cleaner,
            smarter and more sustainable future.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-lime-500/20 bg-[#111111] p-5">
              <h3 className="text-3xl font-black text-lime-400">100%</h3>
              <p className="mt-2 text-gray-400">
                Commitment to Quality
              </p>
            </div>

            <div className="rounded-2xl border border-lime-500/20 bg-[#111111] p-5">
              <h3 className="text-3xl font-black text-lime-400">♻</h3>
              <p className="mt-2 text-gray-400">
                Sustainable Technology
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-2xl bg-lime-500 px-8 py-4 font-bold text-black transition hover:scale-105">
              Our Vision
            </button>

            <button className="rounded-2xl border border-lime-500 px-8 py-4 transition hover:bg-lime-500 hover:text-black">
              Learn More
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
