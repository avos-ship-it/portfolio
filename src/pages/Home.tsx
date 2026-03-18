import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, BarChart3, Layout, MousePointer2, Mail, Share2, Star } from 'lucide-react';
import { projects, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const MotionLink = motion(Link);

const iconMap: Record<string, any> = {
  Globe,
  BarChart3,
  Layout,
  MousePointer2,
  Mail,
  Share2,
};

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAE7CE]">
        {/* Animated Organic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { color: '#FF85A2', size: 'w-[600px] h-[600px]', duration: 20, delay: 0, x: [0, 100, -50, 0], y: [0, -100, 50, 0], left: '60%', top: '-10%' },
            { color: '#FFB385', size: 'w-[700px] h-[700px]', duration: 25, delay: 2, x: [-50, 50, 100, -50], y: [50, 100, -50, 50], left: '50%', top: '30%' },
            { color: '#C299FF', size: 'w-[800px] h-[800px]', duration: 22, delay: 5, x: [50, -100, 50, 50], y: [-50, 50, 100, -50], left: '70%', top: '50%' },
            { color: '#85E0FF', size: 'w-[500px] h-[500px]', duration: 18, delay: 1, x: [100, 0, -100, 100], y: [0, 100, -50, 0], left: '80%', top: '10%' },
            { color: '#FFE699', size: 'w-[650px] h-[650px]', duration: 24, delay: 3, x: [-100, 50, 0, -100], y: [-50, -100, 50, -50], left: '65%', top: '70%' },
          ].map((blob, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-[120px] opacity-80 ${blob.size}`}
              style={{ 
                backgroundColor: blob.color,
                left: blob.left,
                top: blob.top,
              }}
              animate={{
                x: blob.x,
                y: blob.y,
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: blob.duration,
                repeat: Infinity,
                delay: blob.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-40 pb-32 md:pt-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
                Designing a web that works for everyone.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-8 font-medium">
                I combine UX strategy, accessibility, and intentional storytelling to build digital spaces that are intuitive, inclusive, and impactful.
              </p>
              <div className="flex flex-wrap gap-4">
                <MotionLink
                  to="/projects"
                  className="relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-sm overflow-visible group"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects <ArrowRight size={20} />
                  </span>
                  
                  {/* Star Sparkles for Button */}
                  {[
                    { top: '-15%', left: '10%', color: '#68D1D4' },
                    { top: '20%', left: '-10%', color: '#FEB95C' },
                    { top: '85%', left: '5%', color: '#615ED8' },
                    { top: '-10%', left: '85%', color: '#E26F9E' },
                    { top: '40%', left: '105%', color: '#68D1D4' },
                    { top: '95%', left: '80%', color: '#FEB95C' },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute pointer-events-none z-0"
                      style={{ top: pos.top, left: pos.left }}
                      variants={{
                        hover: {
                          opacity: [0, 1, 0],
                          scale: [0, 1.2, 0],
                          rotate: [0, 120],
                          transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }
                        }
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                    >
                      <Star 
                        size={14} 
                        fill={pos.color}
                        color={pos.color}
                        className="filter drop-shadow-[0_0_8px_var(--star-color)]"
                        style={{ '--star-color': pos.color } as any}
                      />
                    </motion.div>
                  ))}
                </MotionLink>
                <MotionLink
                  to="/contact"
                  className="relative inline-block px-8 py-4 bg-white text-zinc-900 border border-black/10 rounded-xl font-semibold hover:bg-zinc-50 transition-all shadow-sm overflow-visible group"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  
                  {/* Star Sparkles for Button */}
                  {[
                    { top: '-15%', left: '10%', color: '#68D1D4' },
                    { top: '20%', left: '-10%', color: '#FEB95C' },
                    { top: '85%', left: '5%', color: '#615ED8' },
                    { top: '-10%', left: '85%', color: '#E26F9E' },
                    { top: '40%', left: '105%', color: '#68D1D4' },
                    { top: '95%', left: '80%', color: '#FEB95C' },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute pointer-events-none z-0"
                      style={{ top: pos.top, left: pos.left }}
                      variants={{
                        hover: {
                          opacity: [0, 1, 0],
                          scale: [0, 1.2, 0],
                          rotate: [0, 120],
                          transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }
                        }
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                    >
                      <Star 
                        size={14} 
                        fill={pos.color}
                        color={pos.color}
                        className="filter drop-shadow-[0_0_8px_var(--star-color)]"
                        style={{ '--star-color': pos.color } as any}
                      />
                    </motion.div>
                  ))}
                </MotionLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover="hover"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-center lg:-translate-x-8 cursor-default"
            >
              <div className="relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1W2z4WEPbkbKKVgiNYWvhx-QWnldPm8ou" 
                  alt="Amanda Vos"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Star Sparkles */}
                {[
                  { top: '-5%', left: '10%', color: '#68D1D4' },
                  { top: '20%', left: '-8%', color: '#FEB95C' },
                  { top: '85%', left: '-5%', color: '#615ED8' },
                  { top: '-8%', left: '85%', color: '#E26F9E' },
                  { top: '40%', left: '105%', color: '#68D1D4' },
                  { top: '95%', left: '80%', color: '#FEB95C' },
                  { top: '105%', left: '20%', color: '#393A87' },
                  { top: '75%', left: '108%', color: '#FAE7CE' },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute pointer-events-none z-20"
                    style={{ top: pos.top, left: pos.left }}
                    variants={{
                      hover: {
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                        rotate: [0, 120],
                        transition: {
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }
                      }
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                  >
                    <Star 
                      size={i % 2 === 0 ? 28 : 20} 
                      fill={pos.color}
                      color={pos.color}
                      className="filter drop-shadow-[0_0_12px_var(--star-color)]"
                      style={{ '--star-color': pos.color } as any}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">How I can help</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            const palette = ['#68D1D4', '#E26F9E', '#FEB95C', '#615ED8', '#393A87', '#000000'];
            const color = palette[index % palette.length];
            
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${color}15`, // 15% opacity for background
                    color: color 
                  }}
                >
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-zinc-900 mb-2">{skill.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Learn More Highlight */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAE7CE]/30 rounded-3xl p-8 md:p-12 border border-[#FAE7CE] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">Learn a little more about me!</h3>
            <p className="text-lg text-zinc-600">
              Discover my journey, my passions, and what drives me to create meaningful digital experiences.
            </p>
          </div>
          <MotionLink
            to="/about"
            className="relative shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-sm overflow-visible group"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={{
              hover: { scale: 1.05 }
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              About Me <ArrowRight size={20} />
            </span>
            
            {/* Star Sparkles for Button */}
            {[
              { top: '-15%', left: '10%', color: '#68D1D4' },
              { top: '20%', left: '-10%', color: '#FEB95C' },
              { top: '85%', left: '5%', color: '#615ED8' },
              { top: '-10%', left: '85%', color: '#E26F9E' },
              { top: '40%', left: '105%', color: '#68D1D4' },
              { top: '95%', left: '80%', color: '#FEB95C' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none z-0"
                style={{ top: pos.top, left: pos.left }}
                variants={{
                  hover: {
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    rotate: [0, 120],
                    transition: {
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }
                  }
                }}
                initial={{ opacity: 0, scale: 0 }}
              >
                <Star 
                  size={14} 
                  fill={pos.color}
                  color={pos.color}
                  className="filter drop-shadow-[0_0_8px_var(--star-color)]"
                  style={{ '--star-color': pos.color } as any}
                />
              </motion.div>
            ))}
          </MotionLink>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="relative rounded-3xl p-8 md:p-12 text-center space-y-6">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 max-w-3xl mx-auto">
              Ready to elevate your digital&nbsp;presence?
            </h2>
            <p className="text-zinc-600 text-lg max-w-xl mx-auto">
              Let's discuss how we can build a more strategic, accessible, and user-centered web experience for your organization.
            </p>
            <MotionLink
              to="/contact"
              className="relative inline-block px-8 py-4 bg-[#E26F9E] text-white rounded-xl font-semibold hover:bg-[#d15b8a] transition-all shadow-lg overflow-visible group"
              whileHover="hover"
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Conversation</span>
              
              {/* Star Sparkles for Button */}
              {[
                { top: '-15%', left: '10%', color: '#68D1D4' },
                { top: '20%', left: '-10%', color: '#FEB95C' },
                { top: '85%', left: '5%', color: '#615ED8' },
                { top: '-10%', left: '85%', color: '#E26F9E' },
                { top: '40%', left: '105%', color: '#68D1D4' },
                { top: '95%', left: '80%', color: '#FEB95C' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none z-0"
                  style={{ top: pos.top, left: pos.left }}
                  variants={{
                    hover: {
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, 120],
                      transition: {
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }
                    }
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                >
                  <Star 
                    size={14} 
                    fill={pos.color}
                    color={pos.color}
                    className="filter drop-shadow-[0_0_8px_var(--star-color)]"
                    style={{ '--star-color': pos.color } as any}
                  />
                </motion.div>
              ))}
            </MotionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
