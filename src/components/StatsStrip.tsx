import { useEffect, useRef, useState } from "react";

import { useInView, useReducedMotion } from "framer-motion";

function AnimatedValue({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    const duration = 800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, reduceMotion]);

  return <span ref={ref}>{value}</span>;
}

const stats = [
  { label: "Featured Projects", value: 4, suffix: "+" },
  { label: "Core Domains", value: 3, suffix: "" },
  { label: "CI/Test Focus Areas", value: 5, suffix: "" },
];

export function StatsStrip() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
      {stats.map((stat) => (
        <article key={stat.label} className="glass-panel rounded-2xl p-4">
          <p className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300">
            <AnimatedValue target={stat.value} />
            {stat.suffix}
          </p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}