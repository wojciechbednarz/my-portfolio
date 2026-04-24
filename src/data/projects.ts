import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    summary:
      "Production-style backend platform with FastAPI, async architecture, AI coaching endpoints, and event-driven processing.",
    tags: ["FastAPI", "Async Python", "Redis", "AWS", "CI/CD"],
    repoUrl: "https://github.com/wojciechbednarz/habit-tracker",
    highlight: true,
  },
  {
    id: "ai-research-assistant",
    name: "AI Research Assistant",
    summary:
      "RAG-powered knowledge assistant over AI Devs 4 notes with FastAPI, ChromaDB, LangGraph, OpenRouter, and MCP support.",
    tags: ["RAG", "LangGraph", "ChromaDB", "FastAPI", "MCP"],
    repoUrl: "https://github.com/wojciechbednarz/ai-research-assistant",
  },
  {
    id: "vitaos",
    name: "VitaOS",
    summary:
      "AI-powered personal life OS across seven life areas with FastAPI backend, React frontend, PostgreSQL, and Claude/GPT integration.",
    tags: ["FastAPI", "React", "PostgreSQL", "AI Integration"],
    repoUrl: "https://github.com/wojciechbednarz/VitaOS",
    note: "Developed with help of Claude Code.",
  },
  {
    id: "aegis-tactical-ai",
    name: "Aegis Tactical AI",
    summary:
      "Battlefield decision-support system with React, FastAPI, local LLM via Ollama/OpenRouter, and SRTM terrain analysis.",
    tags: ["FastAPI", "React", "Ollama", "OpenRouter", "Geospatial"],
    repoUrl: "https://github.com/wojciechbednarz/aegis-tactical-ai",
    note: "Developed with help of Claude Code.",
  },
];