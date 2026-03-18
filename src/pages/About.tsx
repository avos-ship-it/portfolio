import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, Star, Briefcase, GraduationCap, 
  Bot, Accessibility, Film, PenTool, BookOpen, Plane, Activity, Coffee, X, Linkedin
} from 'lucide-react';

const galleryImages = [
  {
    url: 'https://lh3.googleusercontent.com/d/1aOAR76xfTOlmLIPY71Ug-Z2nITK7Znvw=s0',
    event: '#PSEWEB 2023',
    topic: 'Outdated to innovative tips for revitalizing your website',
    link: 'https://pseweb.ca/session/outdated-to-innovative-tips-for-revitalizing-your-website/'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1roAZ9g-QirDkNMkt_Df93-CYtDzOdD1I=s0',
    event: 'WatITis 2025',
    topic: 'Digital Accessibility Transformations'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1kAoJNuY9tWY-j7KFJyVxEJOzR3jB1Ss0=s0',
    event: 'Conestoga College CSI International Women’s Day 2025',
    topic: 'Collaboration over Competition'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1n_kLUoG-LmvIP23-QbisAaP1vlsrkTA8=s0',
    event: 'Waterloo Staff Conference 2025',
    topic: 'Digital Accessibility Makeovers'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1EssCWMrfM2Bf90AtGWFSAbqxEP-uEBQv=s0',
    event: '#PSEWEB 2025',
    topic: 'Blog About It! How to Build and Grow a Student-Driven Storytelling Space'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1QJORNiq3Drux1y3F-iSmU9wQVBKnqnco=s0',
    event: 'Co-operative and Education Workshop 2025',
    topic: 'Digital Accessibility 101'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1lFKhjC6EttCpEVJfRpCEjjyqbzOamUIA=s0',
    event: 'Co-op Legends Bulletin',
    topic: 'Co-op Student Recognition Board'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1V8rKmRvqO2qT5nAILXP1FJBzZaWEs7Ym=s0',
    event: 'You @ Waterloo Day Event',
    topic: 'Volunteer at the co-op info booth'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1s39dwy7oDWgsLWePAQqlB5TE4QK-qzzR=s0',
    event: 'Welcome to our Swamp',
    topic: 'Shrek-themed Team social event'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1vp6B85LQN27Px6STTFo6hIOdvuC8VrW7=s0',
    event: 'Tree planting at UWaterloo',
    topic: 'Volunteer tree planting for the Office of Sustainability'
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1MIKW-ucSeB9Xgfw1N1yQDJM2Kc5ULAFb=s0',
    event: 'Holiday Team Social',
    topic: 'Festive Holiday Sweater Team Social Event'
  }
];

const passions = [
  { name: 'Accessibility', icon: Accessibility, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'Film', icon: Film, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'Storytelling', icon: BookOpen, color: 'text-amber-500', bg: 'bg-amber-50' },
  { name: 'Travel', icon: Plane, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { name: 'Running', icon: Activity, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Pastries', icon: Coffee, color: 'text-orange-500', bg: 'bg-orange-50' },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const row1 = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
  const row2 = galleryImages.slice(Math.ceil(galleryImages.length / 2));
  
  // Duplicate for seamless loop
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <div className="relative min-h-screen">
      {/* Animated Organic Background (Right Side Only) */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#FAE7CE]">
          {[
            { color: '#FF85A2', size: 'w-[600px] h-[600px]', duration: 20, delay: 0, x: [0, 100, -50, 0], y: [0, -100, 50, 0], left: '20%', top: '-10%' },
            { color: '#FFB385', size: 'w-[700px] h-[700px]', duration: 25, delay: 2, x: [-50, 50, 100, -50], y: [50, 100, -50, 50], left: '10%', top: '30%' },
            { color: '#C299FF', size: 'w-[800px] h-[800px]', duration: 22, delay: 5, x: [50, -100, 50, 50], y: [-50, 50, 100, -50], left: '30%', top: '50%' },
            { color: '#85E0FF', size: 'w-[500px] h-[500px]', duration: 18, delay: 1, x: [100, 0, -100, 100], y: [0, 100, -50, 0], left: '40%', top: '10%' },
            { color: '#FFE699', size: 'w-[650px] h-[650px]', duration: 24, delay: 3, x: [-100, 50, 0, -100], y: [-50, -100, 50, -50], left: '25%', top: '70%' },
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
        {/* Gradient mask to blend the middle */}
        <div className="absolute inset-y-0 left-1/2 -ml-32 w-64 bg-gradient-to-r from-white to-transparent"></div>
        {/* Bottom gradient to fade out */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 45s linear infinite;
        }
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Top Section: Bio & Image */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">About Me</h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              Designing a web that works for everyone.
            </p>
          </div>
          
          <div className="prose prose-zinc prose-lg text-zinc-600 leading-relaxed">
            <p>
              I bring together UX strategy, accessibility, and thoughtful storytelling to create digital experiences that feel intuitive, inclusive, and genuinely useful.
            </p>
            <br />
            <p>
              I’m guided by a simple belief: data should inform design, and design should serve people. I enjoy translating complex business needs into clear, user-friendly experiences that just make sense. I’m known for following things through. I don’t just start strong, I make sure the work gets done and done well.
            </p>
            <br />
            <p>
              I also value supporting the people around me. Through my studies in both leadership and followership, I’ve learned how to step into the role a team needs, whether that’s guiding others, mentoring teammates, or contributing as a thoughtful and reliable collaborator.
            </p>
            <br />
            <p>
              Thanks for stopping by and taking the time to learn more about my work.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1sAqsniEdPC0WbhzA0XjNHLt_2aG_-CQ-"
              className="relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold transition-all shadow-sm overflow-visible group"
              style={{ backgroundColor: '#000000' }}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: { scale: 1.05 }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV <Download size={20} />
              </span>
              
              {/* Star Sparkles for Button */}
              {[
                { top: '-15%', left: '10%', color: '#68D1D4' },
                { top: '20%', left: '-10%', color: '#FEB95C' },
                { top: '85%', left: '5%', color: '#FFFFFF' },
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
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/amanda-vos-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold transition-all shadow-sm overflow-visible group"
              style={{ backgroundColor: '#0077b5' }}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: { scale: 1.05 }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                LinkedIn <Linkedin size={20} />
              </span>
              
              {/* Star Sparkles for Button */}
              {[
                { top: '-15%', left: '10%', color: '#68D1D4' },
                { top: '20%', left: '-10%', color: '#FEB95C' },
                { top: '85%', left: '5%', color: '#FFFFFF' },
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
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative flex justify-center lg:justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/5 relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1YUm9bjsoc8ulf_spzleaSh9CLulRxgER=s0" 
                alt="Amanda Vos smiling wearing a white fuzzy jacket." 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FEB95C]/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#615ED8]/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </motion.div>
      </section>

      {/* Middle Section 1: Work and Education */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-200">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">University of Waterloo</h3>
              <p className="text-zinc-600 font-medium mt-1">Digital Experience Team Lead</p>
              <p className="text-sm text-zinc-500 mt-1">Digital Strategy, Web Supervision, Social Media Communications</p>
            </div>
            
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-200">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-emerald-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">Landmark Cinemas</h3>
              <p className="text-zinc-600 font-medium mt-1">Theatre Manager</p>
              <p className="text-sm text-zinc-500 mt-1">Team Leadership, Guest Recovery, Problem Solving</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">Walt Disney World Resort</h3>
              <p className="text-zinc-600 font-medium mt-1">Cast Member</p>
              <p className="text-sm text-zinc-500 mt-1">Guest-centric communication, Attention to detail, Positivity under pressure</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-200">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-amber-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">University of Waterloo</h3>
              <p className="text-zinc-600 font-medium mt-1">Master's of Business Entrepreneurship and Technology</p>
              <p className="text-sm text-zinc-500 mt-1 font-semibold">Class of 2027</p>
            </div>
            
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-zinc-200">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-pink-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">University of Waterloo</h3>
              <p className="text-zinc-600 font-medium mt-1">Master of Digital Experience Innovation</p>
              <p className="text-sm text-zinc-500 mt-1 font-semibold">Class of 2021</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-zinc-900">University of Waterloo</h3>
              <p className="text-zinc-600 font-medium mt-1">Honours Bachelor of Arts</p>
              <p className="text-sm text-zinc-500 mt-1 font-semibold">Class of 2016</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Middle Section 2: Speaking and Social Events */}
      <section className="space-y-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Speaking & Social Events</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            I actively participate in industry conferences and speaking engagements to share my expertise and learn from peers. Beyond my professional work, I take pride in leading team social committees, fostering a vibrant, welcoming culture, and making the workplace an enjoyable environment for everyone. I'm passionate about volunteering and giving back to the community by supporting local initiatives or lending a hand where it's needed most.
          </p>
        </motion.div>

        <div className="space-y-6 py-4 relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Row 1 */}
          <div className="marquee-track gap-6 px-6">
            {track1.map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-80 md:w-96 aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 shadow-md border border-black/5 flex-shrink-0 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.url} alt={img.event} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{img.event}</h3>
                  <p className="text-white/90 text-sm font-medium line-clamp-2">{img.topic}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="marquee-track-reverse gap-6 px-6">
            {track2.map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-80 md:w-96 aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 shadow-md border border-black/5 flex-shrink-0 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.url} alt={img.event} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{img.event}</h3>
                  <p className="text-white/90 text-sm font-medium line-clamp-2">{img.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section: Passions and Interests */}
      <section className="space-y-12 relative pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">Passions & Interests</h2>
          <p className="text-zinc-500 text-lg">When I'm not working, you can find me exploring these areas.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4 max-w-5xl mx-auto">
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={passion.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-4"
              >
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${passion.bg} ${passion.color} shadow-sm border border-black/5`}>
                  <Icon size={40} className="md:w-12 md:h-12" />
                </div>
                <span className="font-semibold text-zinc-700">{passion.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal for Gallery Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-zinc-600 hover:text-zinc-900 rounded-full shadow-md transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row h-[80vh] md:h-[70vh]">
                <div className="w-full md:w-2/3 h-1/2 md:h-full bg-zinc-100">
                  <img src={selectedImage.url} alt={selectedImage.event} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4">{selectedImage.event}</h3>
                  <p className="text-lg text-zinc-600 font-medium mb-6">{selectedImage.topic}</p>
                  {selectedImage.link && (
                    <a href={selectedImage.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors">
                      View Session Details
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
