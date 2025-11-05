import { Award, Code, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a gameplay and tools programmer focused on crafting responsive, satisfying game feel. I work across Unity (C#) and Unreal Engine 5 (C++), building systems like character controllers, ability frameworks, AI behaviors, and production-ready tooling.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 font-medium"><Code size={16} className="text-cyan-400" /> Core</div>
              <ul className="mt-2 text-white/80 space-y-1 list-disc list-inside">
                <li>Unity (C#), UE5 (C++)</li>
                <li>Gameplay Systems</li>
                <li>AI & Tools</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 font-medium"><Cpu size={16} className="text-purple-400" /> Tech</div>
              <ul className="mt-2 text-white/80 space-y-1 list-disc list-inside">
                <li>GAS, Behavior Trees</li>
                <li>Shader/VFX Graph</li>
                <li>Optimization & Profiling</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-sm text-white/70"><Award size={16} className="text-emerald-400" /> Highlights</div>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li>• Built modular ability systems in both engines with data-driven authoring.</li>
              <li>• Designed editor tooling to speed up level design workflows.</li>
              <li>• Focused on performance budgets, memory, and frame-time profiling.</li>
              <li>• Passion for tactile game feel, accessibility, and player-centric UX.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Unity', 'Unreal Engine 5', 'C#', 'C++', 'GAS', 'Behavior Trees', 'Shader Graph', 'VFX Graph', 'Cinemachine', 'ProBuilder'].map((s) => (
                <span key={s} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
