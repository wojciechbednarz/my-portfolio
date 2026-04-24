import { motion, useReducedMotion } from "framer-motion";

const trustTags = ["Python Backend", "FastAPI", "AI/LLM", "AWS Cloud", "CI/CD"];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion ? {} : { opacity: 1, y: 0 };
  const initial = reduceMotion ? {} : { opacity: 0, y: 10 };

  return (
    <section id="top" className="glass-panel rounded-3xl p-7 md:p-12">
      <motion.p
        initial={initial}
        animate={animate}
        transition={{ duration: 0.35 }}
        className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
      >
        Python Backend Engineer
      </motion.p>

      <motion.h1
        initial={initial}
        animate={animate}
        transition={{ duration: 0.42, delay: 0.06 }}
        className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl"
      >
        Building reliable Python backend and AI systems for cloud-native products.
      </motion.h1>

      <motion.p
        initial={initial}
        animate={animate}
        transition={{ duration: 0.42, delay: 0.12 }}
        className="mt-5 max-w-3xl text-slate-700 dark:text-slate-300"
      >
        I started as an SDET and now focus fully on Python backend development, building FastAPI services,
        AI/LLM integrations, and AWS workflows with production-grade reliability.
      </motion.p>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.42, delay: 0.18 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-slate-300/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/10"
        >
          Contact
        </a>
      </motion.div>

      <div className="mt-7 flex flex-wrap gap-2">
        {trustTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-200/80 bg-cyan-100/70 px-3 py-1 text-xs font-semibold text-cyan-900 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}