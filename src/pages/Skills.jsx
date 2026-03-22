import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Brain, Wrench } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'JavaScript ES6+', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'Python / FastAPI', level: 75 },
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'REST / GraphQL', level: 80 },
    ],
  },
  {
    id: 'ai',
    label: 'IA & LLM',
    icon: Brain,
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/20',
    skills: [
      { name: 'Prompt Engineering', level: 90 },
      { name: 'OpenAI / Claude APIs', level: 85 },
      { name: 'LangChain', level: 70 },
      { name: 'Python (ML)', level: 68 },
      { name: 'RAG / Embeddings', level: 65 },
    ],
  },
  {
    id: 'tools',
    label: 'Outils',
    icon: Wrench,
    color: 'text-info',
    bg: 'bg-info/10',
    border: 'border-info/20',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 75 },
      { name: 'Vercel / Netlify', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

// Animated progress bar component
function SkillBar({ name, level, color, visible }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-base-content/80">{name}</span>
        <span className={`font-mono text-[11px] font-medium ${color}`}>{level}%</span>
      </div>
      <div className="progress-custom">
        <div
          className="progress-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

// Category tab button
function CategoryTab({ category, isActive, onClick }) {
  const Icon = category.icon
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 active:scale-90
        ${isActive
          ? `${category.bg} ${category.border} border`
          : 'text-base-content/40 hover:text-base-content/60'
        }`}
    >
      <Icon size={18} className={isActive ? category.color : ''} strokeWidth={isActive ? 2.5 : 1.8} />
      <span className={`text-[9px] font-mono uppercase tracking-wider ${isActive ? category.color : ''}`}>
        {category.label}
      </span>
    </button>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const category = SKILL_CATEGORIES.find(c => c.id === activeCategory)

  // Trigger animation when category changes or on mount
  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [activeCategory])

  return (
    <motion.div
      className="pt-4 pb-6 space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Header ── */}
      <motion.div variants={itemVariants}>
        <h2 className="font-display font-black text-2xl text-base-content mb-1">Compétences</h2>
        <p className="text-sm text-base-content/50 font-body">Mon arsenal technique actuel</p>
      </motion.div>

      {/* ── Category tabs ── */}
      <motion.div variants={itemVariants} className="glass rounded-2xl p-2">
        <div className="grid grid-cols-4 gap-1">
          {SKILL_CATEGORIES.map(cat => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Skills list ── */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5 space-y-4"
        ref={ref}
      >
        <div className={`flex items-center gap-2 pb-3 border-b border-surface-border`}>
          <div className={`w-8 h-8 rounded-xl ${category.bg} flex items-center justify-center`}>
            <category.icon size={16} className={category.color} strokeWidth={2} />
          </div>
          <h3 className="font-display font-bold text-base text-base-content">{category.label}</h3>
        </div>

        <div className="space-y-4">
          {category.skills.map(skill => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={category.color}
              visible={visible}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Tech stack chips ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5">
        <h3 className="font-display font-bold text-sm text-base-content/50 uppercase tracking-widest mb-4">Stack complète</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'React', 'Next.js', 'Node.js', 'Express', 'Python',
            'FastAPI', 'MongoDB', 'PostgreSQL', 'TailwindCSS',
            'TypeScript', 'Docker', 'Git', 'Vercel', 'OpenAI API',
            'LangChain', 'Figma', 'REST API', 'GraphQL',
          ].map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-xl bg-surface-elevated border border-surface-border
                         text-[11px] font-mono text-base-content/60 hover:text-accent hover:border-accent/30
                         transition-all duration-150 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Learning now ── */}
      <motion.div variants={itemVariants} className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] text-accent uppercase tracking-widest">En cours d'apprentissage</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Rust', 'Kubernetes', 'Fine-tuning LLM', 'Three.js'].map(item => (
            <span key={item} className="px-3 py-1 rounded-xl bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
