import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    summary:
      "FastAPI backend for habit tracking with async workflows, typed API contracts, and reliability-focused development practices.",
    tags: ["Python", "FastAPI", "Pydantic v2", "SQLAlchemy", "Pytest", "CI/CD"],
    repoUrl: "https://github.com/wojciechbednarz/habit-tracker",
    highlight: true,
  },
  {
    id: "ai-research-assistant",
    name: "AI Research Assistant",
    summary:
      "LLM-powered research assistant backend with retrieval orchestration, structured outputs, and resilient response parsing.",
    tags: ["Python", "FastAPI", "RAG", "LangGraph", "OpenRouter", "MCP"],
    repoUrl: "https://github.com/wojciechbednarz/ai-research-assistant",
  },
  {
    id: "vitaos",
    name: "VitaOS",
    summary:
      "AI-enabled personal operating system prototype with a FastAPI backend and modular workflows across multiple domains.",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "AI Integration"],
    repoUrl: "https://github.com/wojciechbednarz/VitaOS",
    note: "Developed with help of Claude Code.",
  },
  {
    id: "aegis-tactical-ai",
    name: "Aegis Tactical AI",
    summary:
      "Decision-support prototype combining FastAPI services, geospatial context, and local or cloud LLM routing.",
    tags: ["Python", "FastAPI", "Ollama", "OpenRouter", "Geospatial", "React"],
    repoUrl: "https://github.com/wojciechbednarz/aegis-tactical-ai",
    note: "Developed with help of Claude Code.",
  },
];
