import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.20),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.18),transparent_44%)]" />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-24 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}