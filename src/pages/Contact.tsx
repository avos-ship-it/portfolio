import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Send, Star, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/amandavos42@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAE7CE]">
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

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Let's connect</h1>
              <p className="text-xl text-zinc-700 leading-relaxed max-w-md font-medium">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Email</p>
                  <a href="mailto:amandavos42@gmail.com" className="text-zinc-600 hover:text-emerald-600 transition-colors font-medium">
                    amandavos42@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/amanda-vos-profile/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-600 transition-colors font-medium">
                    linkedin.com/in/amanda-vos-profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-black/5 shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Message Sent!</h3>
                  <p className="text-lg text-zinc-600 font-medium">
                    Thanks for reaching out! I'll get back to you soon 😊
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      placeholder="How can I help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    className="relative w-full py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 overflow-visible group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={18} />}
                    </span>
                    
                    {/* Star Sparkles for Button */}
                    {!isSubmitting && [
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
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
