import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    summary:
      "Async FastAPI backend deployed on AWS Lambda + RDS with SAM: SQS background worker, SES notifications, S3 presigned report downloads, and an AI coaching endpoint on Amazon Bedrock. Tested with pytest, testcontainers, moto, and Hypothesis.",
    tags: ["Python", "FastAPI", "AWS Lambda", "Amazon Bedrock", "SQS", "Pytest"],
    repoUrl: "https://github.com/wojciechbednarz/habit-tracker",
    highlight: true,
  },
  {
    id: "ai-research-assistant",
    name: "AI Research Assistant",
    summary:
      "LangGraph RAG agent with hybrid BM25 + vector retrieval, a human-in-the-loop approval gate, an MCP server written from scratch (JSON-RPC 2.0 over STDIO), and an evaluation harness: golden question set plus LLM-judge faithfulness scoring, traced in Langfuse.",
    tags: ["Python", "LangGraph", "RAG", "MCP", "LLM Evaluation", "Langfuse"],
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
