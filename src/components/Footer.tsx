import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-black/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-lg font-semibold tracking-tight text-zinc-900">
              Amanda <span className="text-zinc-500 font-normal">Vos</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs">
              Designing a web that works for everyone. I combine UX strategy, accessibility, and intentional storytelling to build digital spaces that are intuitive, inclusive, and impactful.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors p-2 bg-white rounded-full border border-black/5 shadow-sm">
                <Linkedin size={18} />
              </a>

              <a href="mailto:amandavos42@gmail.com" className="text-zinc-500 hover:text-zinc-900 transition-colors p-2 bg-white rounded-full border border-black/5 shadow-sm">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Amanda Vos. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400 mt-4 md:mt-0">
            Designed with clarity and accessibility in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
