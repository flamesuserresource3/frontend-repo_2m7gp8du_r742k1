import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="py-24 md:py-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & collaborations
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Muhammad Khoirur Rizal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Game Programmer</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Building playful, performant experiences using Unity (C#) and Unreal Engine 5 (C++). I design gameplay systems, tools, and polished feel with a strong eye for UX.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">View Projects</a>
            <a href="#about" className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition">About Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
