import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#timeline", label: "Timeline" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2 md:px-5 md:py-3">
        <a
          href="#top"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-extrabold text-slate-950"
          aria-label="Go to top"
        >
          WB
        </a>

        <nav className="mx-3 hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/wojciechbednarz"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-slate-300/70 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10 md:inline-block"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>

      <nav className="glass-panel mx-auto mt-2 flex max-w-6xl items-center gap-2 overflow-x-auto rounded-xl px-2 py-2 md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-lg px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}