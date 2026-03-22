import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, Zap, Brain, Globe, ShoppingCart, MessageSquare, BarChart3 } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const FILTERS = ['Tous', 'IA', 'Frontend', 'Fullstack']

const PROJECTS = [
  {
    id: 1,
    title: 'ChatAssist AI',
    description: 'Assistant IA contextuel intégrant GPT-4 avec mémoire persistante et interface chat premium.',
    icon: MessageSquare,
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10',
    tags: ['React', 'OpenAI', 'Node.js'],
    category: 'IA',
    stars: 47,
    featured: true,
    gradient: 'from-accent/20 to-secondary/10',
    live: '#',
    repo: '#',
  },
  {
    id: 2,
    title: 'DevBoard Pro',
    description: 'Dashboard SaaS pour développeurs : suivi de projets, métriques Git et insights IA.',
    icon: BarChart3,
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    tags: ['Next.js', 'PostgreSQL', 'Charts'],
    category: 'Fullstack',
    stars: 32,
    featured: false,
    gradient: 'from-secondary/20 to-info/10',
    live: '#',
    repo: '#',
  },
  {
    id: 3,
    title: 'AfriShop',
    description: 'E-commerce mobile-first pour artisans africains avec paiement mobile money intégré.',
    icon: ShoppingCart,
    iconColor: 'text-warning',
    iconBg: 'bg-warning/10',
    tags: ['React', 'Express', 'MongoDB'],
    category: 'Fullstack',
    stars: 28,
    featured: false,
    gradient: 'from-warning/20 to-accent/10',
    live: '#',
    repo: '#',
  },
  {
    id: 4,
    title: 'LandingAI',
    description: 'Générateur de landing pages par IA. Décris ton produit, reçois une page complète.',
    icon: Brain,
    iconColor: 'text-info',
    iconBg: 'bg-info/10',
    tags: ['React', 'LangChain', 'Claude API'],
    category: 'IA',
    stars: 61,
    featured: true,
    gradient: 'from-info/20 to-secondary/10',
    live: '#',
    repo: '#',
  },
  {
    id: 5,
    title: 'PortfolioKit',
    description: 'Template portfolio open-source pour développeurs. Ce projet est né de ce template.',
    icon: Globe,
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10',
    tags: ['React', 'TailwindCSS', 'Vite'],
    category: 'Frontend',
    stars: 89,
    featured: false,
    gradient: 'from-accent/15 to-transparent',
    live: '#',
    repo: '#',
  },
]

// Project card component
function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl bg-surface-card border shadow-card overflow-hidden
        ${project.featured ? 'border-accent/30' : 'border-surface-border'}
        hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
          <Zap size={9} className="text-accent" strokeWidth={2.5} />
          <span className="text-[9px] font-mono text-accent uppercase">Featured</span>
        </div>
      )}

      {/* Gradient header */}
      <div className={`h-20 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute bottom-3 left-4">
          <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center border border-white/5`}>
            <Icon size={20} className={project.iconColor} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-base text-base-content">{project.title}</h3>
          <div className="flex items-center gap-1 text-base-content/40">
            <Star size={11} strokeWidth={1.5} />
            <span className="font-mono text-[10px]">{project.stars}</span>
          </div>
        </div>

        <p className="text-xs text-base-content/60 font-body leading-relaxed mb-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-lg bg-surface-elevated border border-surface-border text-[10px] font-mono text-base-content/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                       bg-accent/10 border border-accent/20 text-accent text-xs font-body font-medium
                       hover:bg-accent hover:text-surface transition-all duration-200 active:scale-95"
          >
            <ExternalLink size={12} strokeWidth={2.5} />
            Live
          </a>
          <a
            href={project.repo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                       glass text-base-content/60 text-xs font-body font-medium
                       hover:text-base-content transition-all duration-200 active:scale-95"
          >
            <Github size={12} strokeWidth={2} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered = activeFilter === 'Tous'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <motion.div
      className="pt-4 pb-6 space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Header ── */}
      <motion.div variants={itemVariants}>
        <h2 className="font-display font-black text-2xl text-base-content mb-1">Projets</h2>
        <p className="text-sm text-base-content/50 font-body">{PROJECTS.length} projets · code & créativité</p>
      </motion.div>

      {/* ── Filter tabs ── */}
      <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-xl text-xs font-body font-medium transition-all duration-200 active:scale-95
              ${activeFilter === filter
                ? 'bg-accent text-surface shadow-glow-sm'
                : 'glass text-base-content/50 hover:text-base-content/80'
              }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* ── Project grid ── */}
      <motion.div layout className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── GitHub CTA ── */}
      <motion.div variants={itemVariants}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl
                     glass border border-surface-border text-sm font-body font-medium text-base-content/60
                     hover:text-accent hover:border-accent/30 transition-all duration-200 active:scale-95"
        >
          <Github size={16} strokeWidth={1.8} />
          Voir tous mes repos sur GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Projects
