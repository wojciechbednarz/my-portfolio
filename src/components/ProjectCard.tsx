import { motion, useReducedMotion } from "framer-motion";

type Props = {
  name: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  note?: string;
  highlight?: boolean;
};

export function ProjectCard({ name, summary, tags, repoUrl, note, highlight }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
      className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm ${
        highlight
          ? "border-cyan-300/45 bg-cyan-200/20 dark:bg-cyan-300/10"
          : "border-slate-300/80 bg-white/70 dark:border-white/10 dark:bg-white/5"
      }`}
    >
      <div className="gradient-ring pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{summary}</p>

        {note ? <p className="mt-3 text-xs font-medium text-cyan-700 dark:text-cyan-200">{note}</p> : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-300/70 bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-cyan-700 transition group-hover:text-cyan-600 dark:text-cyan-300 dark:group-hover:text-cyan-200"
          >
            Open project {"->"}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}