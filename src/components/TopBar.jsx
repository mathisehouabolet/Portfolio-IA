import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

/**
 * TopBar — minimal status-bar-style header, like an app
 */
function TopBar({ activePage }) {
  const pageLabels = {
    home: 'Dev.AI',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
  }

  const label = pageLabels[activePage] || 'Dev.AI'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center">
      <div className="w-full max-w-lg glass border-b border-surface-border/40">
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-xl bg-accent flex items-center justify-center shadow-glow-sm">
              <Sparkles size={14} className="text-surface" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-sm text-base-content">
              Dev<span className="text-accent">.AI</span>
            </span>
          </div>

          {/* Page title */}
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs font-medium text-base-content/50 tracking-widest uppercase"
          >
            {label}
          </motion.span>

          {/* Status indicator (online dot) */}
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent/30 scale-150 animate-ping" />
            </div>
            <span className="text-[10px] text-accent/70 font-mono">online</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
