import { motion } from "framer-motion";

const evidence = [
  {
    title: "Security and Access Control",
    description:
      "JWT flows, role-based authorization checks, and hardened API middleware for consistent request security.",
  },
  {
    title: "Observability and Error Handling",
    description:
      "Structured logging, centralized exception handlers, and production-oriented failure reporting patterns.",
  },
  {
    title: "CI and Release Discipline",
    description:
      "Automated checks across formatting, linting, typing, tests, and vulnerability scans before release paths.",
  },
];

export function EvidenceSection() {
  return (
    <section id="evidence" className="mt-10">
      <h2 className="text-2xl font-bold md:text-3xl">Technical Evidence</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 md:text-base">
        Concrete implementation patterns demonstrating backend quality and operational thinking.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {evidence.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}