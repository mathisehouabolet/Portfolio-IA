import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles, Code2, Brain, Rocket } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

// Quick stat badge
function StatBadge({ value, label, color = 'accent' }) {
  return (
    <div className="glass rounded-2xl px-4 py-3 flex flex-col items-center gap-0.5">
      <span className={`font-display font-bold text-xl text-${color}`}>{value}</span>
      <span className="text-[10px] text-base-content/50 font-body uppercase tracking-widest">{label}</span>
    </div>
  )
}

// Social link button
function SocialBtn({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-2xl glass flex items-center justify-center
                 hover:border-accent/40 hover:text-accent hover:shadow-glow-sm
                 text-base-content/50 transition-all duration-200 active:scale-90"
    >
      <Icon size={16} strokeWidth={1.8} />
    </a>
  )
}

function Home({ onNavigate }) {
  return (
    <motion.div
      className="pt-4 pb-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Hero Card ── */}
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-3xl bg-surface-card border border-surface-border shadow-card p-6">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

        {/* Status chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] text-accent font-mono font-medium">Disponible pour projets</span>
        </div>

        {/* Avatar */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative animate-float">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent via-secondary to-accent/50 p-0.5 shadow-glow">
              <div className="w-full h-full rounded-[22px] bg-surface-card flex items-center justify-center overflow-hidden">
                <span className="font-display font-black text-3xl text-gradient">EM</span>
              </div>
            </div>
            {/* AI badge */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-accent flex items-center justify-center shadow-glow-sm">
              <Brain size={14} className="text-surface" strokeWidth={2.5} />
            </div>
          </div>

          {/* Quick action */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent/10 border border-accent/20
                       text-accent text-xs font-body font-medium hover:bg-accent hover:text-surface
                       transition-all duration-200 active:scale-95"
          >
            <Download size={13} strokeWidth={2.5} />
            CV
          </button>
        </div>

        {/* Name & title */}
        <div className="mb-4">
          <h1 className="font-display font-black text-3xl text-base-content leading-tight mb-1">
            Ehouabolet Mathis
          </h1>
          <p className="text-base-content/60 font-body text-sm leading-relaxed">
            Développeur Fullstack augmenté par l'IA —{' '}
            <span className="text-accent font-medium">GOMYCODE</span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['React', 'Node.js', 'IA / LLM', 'Python'].map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-xl bg-surface-elevated border border-surface-border text-[11px] text-base-content/60 font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('projects')}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl
                       bg-accent text-surface font-display font-bold text-sm
                       hover:shadow-glow active:scale-95 transition-all duration-200"
          >
            Voir mes projets
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 rounded-2xl glass text-base-content/70 font-body text-sm
                       hover:text-accent hover:border-accent/40 active:scale-95 transition-all duration-200"
          >
            Contact
          </button>
        </div>
      </motion.div>

      {/* ── Stats row ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
        <StatBadge value="12+" label="Projets" color="accent" />
        <StatBadge value="3+" label="Années" color="secondary" />
        <StatBadge value="98%" label="Sérieux" color="info" />
      </motion.div>

      {/* ── Feature cards ── */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h2 className="font-display font-bold text-base text-base-content/70 px-1">Ce que je fais</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Code2, title: 'Dev Fullstack', desc: 'Front & Back, de A à Z', color: 'text-accent', bg: 'bg-accent/10' },
            { icon: Brain, title: 'IA intégrée', desc: 'LLM, agents, prompting', color: 'text-secondary', bg: 'bg-secondary/10' },
            { icon: Rocket, title: 'Déploiement', desc: 'Cloud & CI/CD', color: 'text-warning', bg: 'bg-warning/10' },
            { icon: Sparkles, title: 'UX Premium', desc: 'Interfaces modernes', color: 'text-info', bg: 'bg-info/10' },
          ].map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="glass rounded-2xl p-4 hover:shadow-card-hover transition-all duration-200 active:scale-95 cursor-default">
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                <Icon size={18} className={color} strokeWidth={2} />
              </div>
              <p className="font-display font-semibold text-sm text-base-content mb-0.5">{title}</p>
              <p className="text-[11px] text-base-content/50 font-body">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Social links ── */}
      <motion.div variants={itemVariants} className="flex items-center justify-between px-1">
        <span className="text-xs text-base-content/40 font-body">Retrouve-moi sur</span>
        <div className="flex gap-2">
          <SocialBtn icon={Github} href="https://github.com" label="GitHub" />
          <SocialBtn icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
          <SocialBtn icon={Twitter} href="https://twitter.com" label="Twitter" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
