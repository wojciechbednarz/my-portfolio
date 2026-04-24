import type { TimelineItem } from "@/types/portfolio";

export const timeline: TimelineItem[] = [
  {
    id: "foundation",
    period: "2024",
    title: "Backend Engineering Foundation",
    description:
      "Built core Python backend skills with API design, data modeling, and service-layer architecture.",
    outcomes: ["Shipped production-like REST flows", "Adopted clean layering patterns"],
  },
  {
    id: "quality-engineering",
    period: "2025",
    title: "Quality and TestOps Focus",
    description:
      "Expanded into reliability engineering with test automation, integration testing, and CI quality gates.",
    outcomes: ["Added property-based testing", "Standardized lint/type/test pipelines"],
  },
  {
    id: "ai-systems",
    period: "2026",
    title: "AI + Backend Systems",
    description:
      "Integrated LLM workflows into backend products with schema validation, resilient error handling, and async processing.",
    outcomes: ["Released AI Research Assistant", "Built VitaOS and Aegis Tactical AI"],
  },
  {
    id: "positioning",
    period: "Now",
    title: "SDET / TestOps / Backend Positioning",
    description:
      "Combining backend engineering execution with test strategy and operational quality to ship dependable systems.",
    outcomes: ["Portfolio aligned to production reliability", "High-signal project case studies"],
  },
];