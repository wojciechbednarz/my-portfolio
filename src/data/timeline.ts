import type { TimelineItem } from "@/types/portfolio";

export const timeline: TimelineItem[] = [
  {
    id: "nokia",
    period: "Oct 2020-Dec 2024",
    title: "Integration and Testing Engineer - Nokia",
    description:
      "Built a strong SDET foundation in integration and system testing across Python automation and telecom environments.",
    outcomes: [
      "Built robust automation across UI, API, and system layers using Python, Robot Framework, and Selenium",
      "Worked in Linux/Unix with advanced Bash scripting plus Docker, Kubernetes, and telecom networking protocols",
      "Contributed to CI/CD and test strategy using GitLab, Jenkins, and scalable test repositories",
    ],
  },
  {
    id: "spyrosoft-qa",
    period: "Jan 2025-Dec 2025",
    title: "QA Automation Engineer - Spyrosoft",
    description:
      "Focused on iOS automation with Python and Appium while supporting reliable release delivery across teams.",
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
      "Promoted to Senior. Owns Python orchestration tooling for elevator commissioning and, since August 2026, contributes to Spyrosoft's internal enterprise LLM platform (AI SDLC team).",
    outcomes: [
      "Designed and built Python orchestration tooling for elevator commissioning: state management, hardware-controller integration, error handling",
      "Fixed defects across an enterprise AI chat platform with agents, MCP tools, and RAG through reviewed merge requests",
      "Building the evaluation for the team's AI code-review bot: golden review cases and an offline scorer",
    ],
  },
  {
    id: "transition-backend",
    period: "2025-Present",
    title: "Transition to Python Backend + AI Systems",
    description:
      "Transitioned from QA automation toward backend engineering through project delivery focused on FastAPI services, async workflows, and AI integrations.",
    outcomes: [
      "Released Habit Tracker (AWS Lambda, Bedrock) and AI Research Assistant (LangGraph, MCP, evaluation)",
      "AWS Certified Developer - Associate (DVA-C02), May 2026",
      "Built VitaOS and Aegis Tactical AI",
      "Current direction: Python backend development for AI/LLM and AWS-aligned systems",
    ],
  },
];
