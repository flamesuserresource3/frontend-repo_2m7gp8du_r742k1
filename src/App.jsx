import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function BackgroundGradients() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 blur-3xl" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/40">
      <Navbar />
      <BackgroundGradients />
      <main className="relative" id="home">
        <Hero />
        <Projects />
        <About />
        <footer id="contact" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center text-white/70">
            <p>Let’s build something fun. Reach out at</p>
            <a href="mailto:rizal.dev@example.com" className="text-white hover:underline">rizal.dev@example.com</a>
            <p className="mt-4 text-xs text-white/50">© {new Date().getFullYear()} Muhammad Khoirur Rizal</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
