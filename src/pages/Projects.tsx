import { motion } from 'motion/react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">My Projects</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          A selection of projects where I've applied digital strategy, UX design, and data analytics to solve complex business challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-black/5"
      >
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6">Currently Exploring 🚀</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-800">AI Web Development</h3>
          <p className="text-lg text-zinc-600 leading-relaxed">
            I'm actively exploring the intersection of artificial intelligence and web development, learning how to effectively prompt and <strong>collaborate with AI tools to build dynamic, responsive websites.</strong> In fact, this very portfolio site serves as a live example of my work in this space! It reflects my deep passion for lifelong learning and my commitment to staying at the forefront of emerging technologies to deliver innovative digital experiences.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
