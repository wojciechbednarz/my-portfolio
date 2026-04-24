import type { StackCategory } from "@/types/portfolio";

export const stackCategories: StackCategory[] = [
  {
    title: "Backend and API",
    items: [
      { name: "Python 3.13", icon: "??" },
      { name: "FastAPI", icon: "?" },
      { name: "Pydantic v2", icon: "?" },
      { name: "SQLAlchemy 2.0", icon: "??" },
      { name: "Alembic", icon: "???" },
    ],
  },
  {
    title: "Testing and TestOps",
    items: [
      { name: "Pytest", icon: "??" },
      { name: "Hypothesis", icon: "??" },
      { name: "testcontainers", icon: "??" },
      { name: "Trivy", icon: "???" },
      { name: "GitHub Actions", icon: "??" },
    ],
  },
  {
    title: "AI and LLM Integration",
    items: [
      { name: "Ollama", icon: "??" },
      { name: "OpenRouter", icon: "??" },
      { name: "LangGraph", icon: "??" },
      { name: "Structured Outputs", icon: "??" },
      { name: "MCP", icon: "??" },
    ],
  },
  {
    title: "Data and Infrastructure",
    items: [
      { name: "PostgreSQL", icon: "??" },
      { name: "Redis", icon: "??" },
      { name: "AWS SQS", icon: "??" },
      { name: "AWS S3", icon: "??" },
      { name: "AWS SES", icon: "??" },
    ],
  },
  {
    title: "Frontend and Tooling",
    items: [
      { name: "React", icon: "??" },
      { name: "TypeScript", icon: "??" },
      { name: "Tailwind CSS", icon: "??" },
      { name: "Framer Motion", icon: "?" },
      { name: "Vite", icon: "?" },
    ],
  },
];