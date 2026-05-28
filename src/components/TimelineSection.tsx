import { motion } from "framer-motion";

import { timeline } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section id="timeline" className="mt-10">
      <h2 className="text-2xl font-bold md:text-3xl">Experience and Transition Timeline</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 md:text-base">
        Quality engineering foundation - backend reliability mindset - Python backend and AI system delivery.
      </p>

      <div className="relative mt-6 space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-300 dark:before:bg-white/20">
        {timeline.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel relative ml-0 rounded-2xl p-5 pl-11"
          >
            <span className="absolute left-2 top-5 h-4 w-4 rounded-full border-2 border-cyan-400 bg-white dark:bg-slate-950" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">{item.period}</p>
            <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
            {item.outcomes?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-700 dark:text-slate-300">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
