import { motion } from "framer-motion";

import { stackCategories } from "@/data/stack";

export function StackGrid() {
  return (
    <section id="stack" className="mt-10">
      <h2 className="text-2xl font-bold md:text-3xl">Technology Stack</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 md:text-base">
        A practical stack tuned for backend delivery, quality engineering, and production reliability.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="text-base font-semibold">{category.title}</h3>
            <ul className="mt-3 space-y-2">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-300/80 bg-slate-100 text-[10px] font-bold tracking-wide text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-slate-100"
                  >
                    {item.icon}
                  </span>
                  <span className="leading-none">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}