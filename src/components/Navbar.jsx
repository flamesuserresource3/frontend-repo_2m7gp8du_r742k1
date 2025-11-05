import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600" />
          <span className="font-semibold tracking-tight">Muhammad Khoirur Rizal</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <div className="w-px h-5 bg-white/10" />
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email" href="#contact" className="hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
