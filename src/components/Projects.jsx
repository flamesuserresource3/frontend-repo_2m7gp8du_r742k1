import { Gamepad2, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Runner',
    description:
      'A fast-paced endless runner with tight controls, juice, and procedural level chunks. Built gameplay systems, object pooling, and feel polish.',
    tech: ['Unity', 'C#', 'Cinemachine', 'PostFX'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Echo Tactics',
    description:
      'Turn-based tactics prototype with grid navigation, line of sight, and ability system. Implemented AI behaviors and data-driven tools.',
    tech: ['Unreal Engine 5', 'C++', 'Behavior Trees', 'GAS'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Shader Toybox',
    description:
      'A collection of stylized shaders and VFX for gameplay feedback: hit flashes, trails, dissolve, and holograms with performant settings.',
    tech: ['Unity', 'Shader Graph', 'VFX Graph'],
    link: '#',
    repo: '#',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition overflow-hidden">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-2xl group-hover:from-cyan-500/20 group-hover:to-purple-600/20 transition" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Gamepad2 className="text-cyan-400" size={18} />
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-white/80">{project.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm">
        <a href={project.link} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
          <ExternalLink size={16} /> Live
        </a>
        <a href={project.repo} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-white/80">Selected work across Unity and Unreal Engine 5.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
