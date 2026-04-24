export type ThemePreference = "system" | "light" | "dark";

const THEME_KEY = "theme-preference";

export function getStoredThemePreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}

export function setStoredThemePreference(value: ThemePreference): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, value);
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  return preference === "system" ? getSystemTheme() : preference;
}

export function applyTheme(preference: ThemePreference): "light" | "dark" {
  const resolved = resolveTheme(preference);
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.theme = resolved;
  return resolved;
}

export function subscribeToSystemTheme(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => cb();
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}