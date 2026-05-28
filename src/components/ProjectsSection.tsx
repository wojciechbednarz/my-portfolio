import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 md:text-base">
          Backend and AI projects focused on clear service boundaries, reliability practices, and practical implementation choices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
