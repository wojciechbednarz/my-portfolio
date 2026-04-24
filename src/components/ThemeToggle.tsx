import { useEffect, useMemo, useState } from "react";

import {
  ThemePreference,
  applyTheme,
  getStoredThemePreference,
  setStoredThemePreference,
  subscribeToSystemTheme,
} from "@/lib/theme";

const options: { value: ThemePreference; label: string }[] = [
  { value: "system", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(() => getStoredThemePreference());

  useEffect(() => {
    applyTheme(preference);
    setStoredThemePreference(preference);

    if (preference !== "system") return;
    return subscribeToSystemTheme(() => applyTheme("system"));
  }, [preference]);

  const active = useMemo(() => preference, [preference]);

  return (
    <div className="inline-flex rounded-lg border border-slate-300/80 bg-white/80 p-0.5 dark:border-white/15 dark:bg-white/5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setPreference(option.value)}
          className={`rounded-md px-2 py-1 text-[11px] font-semibold transition md:px-2.5 ${
            active === option.value
              ? "bg-slate-900 text-white dark:bg-cyan-300 dark:text-slate-950"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          }`}
          aria-pressed={active === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}