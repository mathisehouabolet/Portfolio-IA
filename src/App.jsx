import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.99 },
}

const pageTransition = {
  type: 'tween',
  ease: [0.4, 0, 0.2, 1],
  duration: 0.35,
}

// Navigation items config
export const NAV_ITEMS = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

// Page map
const PAGES = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
}

function App() {
  const [activePage, setActivePage] = useState('home')

  const PageComponent = PAGES[activePage] || Home

  return (
    <AppLayout activePage={activePage} onNavigate={setActivePage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen"
        >
          <PageComponent onNavigate={setActivePage} />
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  )
}

export default App
