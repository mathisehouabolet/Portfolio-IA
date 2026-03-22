import { motion } from 'framer-motion'
import {
  Home, User, Zap, FolderOpen, Mail
} from 'lucide-react'

// Map page IDs to icons
const NAV_CONFIG = [
  { id: 'home',     icon: Home,       label: 'Accueil' },
  { id: 'about',    icon: User,       label: 'À propos' },
  { id: 'skills',   icon: Zap,        label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projets' },
  { id: 'contact',  icon: Mail,       label: 'Contact' },
]

/**
 * BottomNav — iOS/Android-style bottom navigation bar
 */
function BottomNav({ activePage, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-safe">
      <div className="glass mx-4 mb-4 rounded-3xl px-2 py-2 shadow-card w-full max-w-lg">
        <div className="flex items-center justify-around">
          {NAV_CONFIG.map(({ id, icon: Icon, label }) => {
            const isActive = activePage === id
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 group"
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active background pill */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-2xl bg-accent/10"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                  />
                )}

                {/* Icon */}
                <div className="relative">
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    className={`transition-all duration-200 ${
                      isActive
                        ? 'text-accent drop-shadow-[0_0_8px_rgba(0,245,160,0.6)]'
                        : 'text-base-content/40 group-hover:text-base-content/70'
                    }`}
                  />
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: 'spring', bounce: 0.4, duration: 0.5 }}
                    />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[9px] font-body font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-base-content/30 group-hover:text-base-content/50'
                  }`}
                >
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
