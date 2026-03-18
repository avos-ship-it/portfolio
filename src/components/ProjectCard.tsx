import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      className="group"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="aspect-[16/10] overflow-hidden rounded-sm bg-zinc-100 mb-6">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-1 transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-ink/50 uppercase tracking-wider">
              {project.category}
            </p>
          </div>
          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}
