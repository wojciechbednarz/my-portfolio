import type { StackCategory } from "@/types/portfolio";

export const stackCategories: StackCategory[] = [
  {
    title: "Backend and API",
    items: [
      { name: "Python 3.13", icon: "PY" },
      { name: "FastAPI", icon: "FA" },
      { name: "Pydantic v2", icon: "PD" },
      { name: "SQLAlchemy 2.0", icon: "SA" },
      { name: "Alembic", icon: "AL" },
    ],
  },
  {
    title: "Testing and Reliability",
    items: [
      { name: "Pytest", icon: "PT" },
      { name: "Hypothesis", icon: "HY" },
      { name: "testcontainers", icon: "TC" },
      { name: "Trivy", icon: "TV" },
      { name: "GitHub Actions", icon: "GA" },
    ],
  },
  {
    title: "AI and LLM Integration",
    items: [
      { name: "Ollama", icon: "OL" },
      { name: "OpenRouter", icon: "OR" },
      { name: "LangGraph", icon: "LG" },
      { name: "Amazon Bedrock", icon: "BR" },
      { name: "MCP", icon: "MP" },
      { name: "LLM Evaluation", icon: "EV" },
      { name: "Langfuse", icon: "LF" },
    ],
  },
  {
    title: "Data and Infrastructure",
    items: [
      { name: "PostgreSQL", icon: "PG" },
      { name: "Redis", icon: "RD" },
      { name: "AWS Lambda", icon: "LA" },
      { name: "AWS RDS", icon: "RS" },
      { name: "AWS SQS", icon: "QS" },
      { name: "AWS S3", icon: "S3" },
      { name: "AWS SES", icon: "SE" },
    ],
  },
  {
    title: "Frontend (Working Knowledge)",
    items: [
      { name: "React", icon: "RE" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "TW" },
      { name: "Framer Motion", icon: "FM" },
      { name: "Vite", icon: "VI" },
    ],
  },
];
