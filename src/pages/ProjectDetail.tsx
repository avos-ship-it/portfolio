import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Layout, Settings, Image as ImageIcon, BarChart3, X } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedAsset, setSelectedAsset] = useState<{url: string, title: string, previewUrl?: string} | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const themeColors: Record<string, string> = {
    'webcare': '#BE185D', // Darkened from #E26F9E
    'careerhub-rebuild': '#D97706', // Darkened from #FEB95C
    'work-abroad-redesign': '#615ED8',
    'insights-newsletter': '#393A87',
    'teachwil': '#0D9488', // Darkened from #68D1D4
    'mycoopexperience-blog': '#000000',
  };

  const themeColor = themeColors[project.id] || '#BE185D';

  return (
    <div className="pt-32 pb-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-brand-indigo/40 hover:text-brand-pink transition-colors mb-12 font-bold uppercase text-xs tracking-widest">
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-16 mb-24"
        >
          <div className="space-y-8 max-w-4xl">
            <span 
              style={{ color: themeColor }}
              className="text-xs font-bold uppercase tracking-[0.2em]"
            >
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-brand-indigo/60 leading-relaxed font-medium">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {project.skills.map((skill) => (
                <span 
                  key={skill} 
                  style={{ color: themeColor, borderColor: themeColor }}
                  className="px-4 py-2 bg-transparent text-xs font-bold rounded-full shadow-sm uppercase tracking-wider border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">Project Overview</h2>
              <p className="text-brand-indigo/70 leading-relaxed text-lg font-medium">
                {project.overview}
              </p>
            </section>

            {/* Visual Assets */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Assets & Visuals</h2>
              <div className="flex flex-col gap-6">
                {project.embedUrl && (
                  <div className="rounded-xl overflow-hidden border border-brand-indigo/5 shadow-sm bg-white aspect-video w-full">
                    <iframe 
                      src={project.embedUrl} 
                      className="w-full h-full border-0" 
                      allowFullScreen 
                      allow="fullscreen; clipboard-read; clipboard-write" 
                      title={`${project.title} Embed`}
                    />
                  </div>
                )}
                
                {project.assets && project.assets.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.assets.map((asset, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <div 
                          className="rounded-xl overflow-hidden border border-brand-indigo/5 shadow-sm bg-white aspect-video cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                          onClick={() => asset.previewUrl && setSelectedAsset(asset)}
                        >
                          <img 
                            src={asset.url} 
                            alt={asset.title} 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        {asset.caption && (
                          <p className="text-sm font-medium text-brand-indigo/70 text-center px-2">
                            {asset.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {!project.embedUrl && (!project.assets || project.assets.length === 0) && (
                  <div className="rounded-xl overflow-hidden border border-brand-indigo/5 shadow-sm bg-white aspect-video w-full">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </section>

            <section 
              style={{ 
                borderColor: `${themeColor}33`,
                boxShadow: `0 25px 50px -12px ${themeColor}1A`
              }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 border shadow-2xl"
            >
              <h2 style={{ color: themeColor }} className="text-3xl font-bold tracking-tight mb-6">The Problem</h2>
              <p 
                className="leading-relaxed text-lg font-medium text-brand-black"
                dangerouslySetInnerHTML={{ __html: project.problem }}
              />
            </section>

            <section>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">My Approach</h2>
              <p className="text-brand-indigo/70 leading-relaxed text-lg font-medium mb-10">
                {project.approach}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black mb-6">Results & Impact</h2>
              <ul className="list-disc list-inside space-y-3 text-brand-indigo/80 leading-relaxed text-xl font-medium">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div>
              <h3 style={{ color: themeColor }} className="text-xs font-bold uppercase tracking-[0.2em] mb-4">My Role</h3>
              <p className="text-brand-black font-bold text-lg">{project.role}</p>
            </div>

            <div>
              <h3 style={{ color: themeColor }} className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-white text-[10px] font-bold text-brand-indigo/40 rounded-full border border-brand-indigo/5 shadow-sm uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Asset Preview Modal */}
      <AnimatePresence>
        {selectedAsset && selectedAsset.previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAsset(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-zinc-600 hover:text-zinc-900 rounded-full shadow-md transition-colors"
                aria-label="Close preview"
              >
                <X size={24} />
              </button>
              {selectedAsset.previewUrl.includes('thumbnail') || selectedAsset.previewUrl.includes('lh3.googleusercontent.com') ? (
                <div className="w-full h-full overflow-y-auto p-4 md:p-8 bg-zinc-50">
                  <img
                    src={selectedAsset.previewUrl}
                    alt={selectedAsset.title}
                    className="max-w-full h-auto mx-auto rounded-lg shadow-sm block"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <iframe
                  src={selectedAsset.previewUrl}
                  className="w-full h-full border-0"
                  allow="autoplay"
                  title={selectedAsset.title}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
