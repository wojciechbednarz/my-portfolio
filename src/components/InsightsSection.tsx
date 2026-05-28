import { motion } from "framer-motion";

const insights = [
  {
    category: "Backend Architecture",
    title: "Layered boundaries improve maintainability",
    description:
      "Separating API routers, service logic, and persistence layers helps keep backend code easier to test and evolve.",
  },
  {
    category: "AI Integration",
    title: "Schema-first outputs reduce LLM ambiguity",
    description:
      "Treating model responses as structured contracts makes downstream parsing more reliable in backend workflows.",
  },
  {
    category: "Delivery Workflow",
    title: "CI checks keep iteration safe",
    description:
      "Running linting, typing, and automated tests on every change catches regressions early and protects release flow.",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="mt-10">
      <h2 className="text-2xl font-bold md:text-3xl">Engineering Insights</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {insights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-2xl p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
              {item.category}
            </p>
            <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
