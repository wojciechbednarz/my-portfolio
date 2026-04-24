import type { TimelineItem } from "@/types/portfolio";

export const timeline: TimelineItem[] = [
  {
    id: "foundation",
    period: "2024",
    title: "SDET Foundation and Backend Transition",
    description:
      "Started as an SDET and built strong quality habits, then moved deeper into Python backend engineering with API design and service-layer architecture.",
    outcomes: ["Shipped production-like REST flows", "Adopted clean layering patterns"],
  },
  {
    id: "quality-engineering",
    period: "2025",
    title: "Python Backend and Reliability Engineering",
    description:
      "Expanded backend ownership with reliability engineering practices: integration testing, CI quality gates, and failure-resistant design.",
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
    title: "Python Backend + AI/LLM + AWS Focus",
    description:
      "Now focused fully on Python backend development for AI/LLM and cloud-native AWS systems.",
    outcomes: [
      "Portfolio aligned to production reliability",
      "High-signal project case studies for Python backend + AI/LLM + AWS roles",
    ],
  },
];