export function Footer() {
  return (
    <footer id="contact" className="mx-auto mb-8 mt-10 w-full max-w-6xl px-4 md:px-8">
      <section className="glass-panel rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold md:text-2xl">Contact</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300 md:text-base">
          I share architecture decisions, implementation tradeoffs, and lessons learned from real systems to keep the
          engineering process transparent and practical.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:bednarz.wojciech96@gmail.com"
            className="rounded-lg border border-slate-300/80 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/wojciech-bednarz-b359661b8"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300/80 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/wojciechbednarz"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300/80 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </section>
    </footer>
  );
}