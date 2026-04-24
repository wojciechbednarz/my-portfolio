import { motion } from "framer-motion";

const insights = [
  {
    category: "Architecture",
    title: "Layered service boundaries keep APIs testable",
    description:
      "Separating routers, services, repositories, and infrastructure reduced coupling and improved test clarity.",
  },
  {
    category: "AI Reliability",
    title: "Schema-first contracts stabilize LLM outputs",
    description:
      "Treating AI responses as typed contracts reduced parser fragility and improved endpoint predictability.",
  },
  {
    category: "TestOps",
    title: "Quality gates shift defects left",
    description:
      "Combining lint, type checks, property tests, and integration checks in CI made delivery safer and faster.",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="mt-10">
      <h2 className="text-2xl font-bold md:text-3xl">Featured Engineering Insights</h2>
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