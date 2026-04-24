import type { TimelineItem } from "@/types/portfolio";

export const timeline: TimelineItem[] = [
  {
    id: "nokia",
    period: "Oct 2020-Jan 2025",
    title: "Integration and Testing Engineer - Nokia",
    description:
      "Started in Nokia with integration and system testing, building strong SDET foundations across Python-based automation and telecom environments.",
    outcomes: [
      "Built robust automation across UI, API, and system layers using Python, Robot Framework, and Selenium",
      "Worked in Linux/Unix with advanced Bash scripting plus Docker, Kubernetes, and telecom networking protocols",
      "Contributed to CI/CD and test strategy using GitLab, Jenkins, and scalable test repositories",
    ],
  },
  {
    id: "spyrosoft-qa",
    period: "Jan 2025-Jan 2026",
    title: "QA Automation Engineer - Spyrosoft",
    description:
      "Focused on iOS mobile test automation with Python and Appium while supporting reliable release delivery across teams.",
    outcomes: [
      "Developed and maintained automated tests with Pytest, unittest, and Behave (BDD)",
      "Collaborated with developers on release quality and test coverage using automated and manual approaches",
      "Supported CI/CD workflows in Azure DevOps and built internal Python tooling",
    ],
  },
  {
    id: "spyrosoft-senior",
    period: "Jan 2026-Present",
    title: "Senior QA Automation Software Engineer - Spyrosoft",
    description:
      "Expanded ownership of automation quality in production projects while continuing deep technical work in Python and Appium.",
    outcomes: [
      "Continued advanced iOS automation delivery with Python and Appium",
      "Strengthened release confidence through stable regression automation",
      "Maintained reusable internal tooling and practical CI quality workflows",
    ],
  },
  {
    id: "transition-backend",
    period: "2025-Present",
    title: "Transition to Python Backend + AI Systems",
    description:
      "Moved from QA automation into backend engineering through project work centered on FastAPI services, async workflows, and AI/LLM integrations.",
    outcomes: [
      "Released Habit Tracker and AI Research Assistant",
      "Built VitaOS and Aegis Tactical AI",
      "Current direction: full-time Python backend development for AI/LLM and AWS systems",
    ],
  },
];
