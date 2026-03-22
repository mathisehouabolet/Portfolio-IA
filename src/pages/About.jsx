import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Heart, Coffee, Zap } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}

// Info row inside a card
function InfoRow({ icon: Icon, label, value, accent = false }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-surface-border/50 last:border-0">
      <div className="w-8 h-8 rounded-xl bg-surface-elevated flex items-center justify-center flex-shrink-0">
        <Icon size={14} className={accent ? 'text-accent' : 'text-base-content/50'} strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-base-content/40 font-mono uppercase tracking-wider">{label}</p>
        <p className="text-sm text-base-content font-body font-medium truncate">{value}</p>
      </div>
    </div>
  )
}

// Passion tag
function PassionTag({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass text-sm font-body text-base-content/70">
      <Icon size={13} className="text-accent" strokeWidth={2} />
      {label}
    </div>
  )
}

function About() {
  return (
    <motion.div
      className="pt-4 pb-6 space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Profile header ── */}
      <motion.div variants={itemVariants} className="rounded-3xl bg-surface-card border border-surface-border shadow-card overflow-hidden">
        {/* Cover gradient */}
        <div className="h-24 bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent relative">
          <div className="absolute inset-0 dot-grid opacity-30" />
          {/* Floating icons decoration */}
          <div className="absolute top-3 right-4 text-accent/20">
            <Zap size={40} />
          </div>
        </div>

        {/* Profile info */}
        <div className="px-5 pb-5 -mt-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary p-0.5 shadow-glow mb-3">
            <div className="w-full h-full rounded-[14px] bg-surface-card flex items-center justify-center">
              <span className="font-display font-black text-2xl text-gradient">EM</span>
            </div>
          </div>
          <h2 className="font-display font-black text-2xl text-base-content mb-1">Ehouabolet Mathis</h2>
          <p className="text-sm text-base-content/60 font-body leading-relaxed">
            Étudiant passionné chez <span className="text-accent font-semibold">GOMYCODE</span>, 
            je construis des applications web modernes en fusionnant 
            <span className="text-secondary font-medium"> développement fullstack</span> et 
            <span className="text-info font-medium"> intelligence artificielle</span>.
          </p>
        </div>
      </motion.div>

      {/* ── Info card ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-4">
        <h3 className="font-display font-semibold text-sm text-base-content/50 uppercase tracking-widest mb-3">Infos</h3>
        <InfoRow icon={MapPin} label="Localisation" value="Abidjan, Côte d'Ivoire" accent />
        <InfoRow icon={GraduationCap} label="Formation" value="GOMYCODE — Dev Fullstack & IA" accent />
        <InfoRow icon={Calendar} label="Disponibilité" value="Immédiate — Freelance / Stage" />
        <InfoRow icon={Coffee} label="Stack préférée" value="React · Node.js · Python · LLM" />
      </motion.div>

      {/* ── Story ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5">
        <h3 className="font-display font-bold text-base text-base-content mb-3">Mon parcours</h3>
        <div className="space-y-3 text-sm text-base-content/70 font-body leading-relaxed">
          <p>
            Tout a commencé avec une simple question : <em className="text-base-content/90 not-italic font-medium">"Comment fonctionne vraiment internet ?"</em>  
            Depuis, je n'ai pas arrêté d'apprendre.
          </p>
          <p>
            Chez GOMYCODE, j'ai plongé dans l'écosystème fullstack moderne. Mais c'est 
            l'<span className="text-accent font-semibold">IA générative</span> qui a tout changé — 
            aujourd'hui, je l'intègre dans chacun de mes projets comme une couche de superpouvoir.
          </p>
          <p>
            Mon objectif : créer des produits qui <span className="text-secondary font-semibold">résolvent de vrais problèmes</span>, 
            avec une expérience utilisateur irréprochable.
          </p>
        </div>
      </motion.div>

      {/* ── Timeline ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5">
        <h3 className="font-display font-bold text-base text-base-content mb-4">Timeline</h3>
        <div className="space-y-0">
          {[
            { year: '2024', event: 'Formation GOMYCODE — Dev Fullstack', current: true },
            { year: '2024', event: 'Premiers projets IA intégrée (LLM APIs)' },
            { year: '2023', event: 'Découverte de React & Node.js' },
            { year: '2023', event: 'Premier projet web complet' },
            { year: '2022', event: 'Début du code — HTML/CSS/JS' },
          ].map(({ year, event, current }, i) => (
            <div key={i} className="flex gap-4 pb-4 last:pb-0 relative">
              {/* Line */}
              {i < 4 && (
                <div className="absolute left-[13px] top-6 bottom-0 w-px bg-surface-border" />
              )}
              {/* Dot */}
              <div className={`relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5
                ${current ? 'bg-accent/20 border border-accent shadow-glow-sm' : 'bg-surface-elevated border border-surface-border'}`}>
                <div className={`w-2 h-2 rounded-full ${current ? 'bg-accent' : 'bg-base-content/30'}`} />
              </div>
              {/* Content */}
              <div className="flex-1 pt-0.5">
                <span className="font-mono text-[10px] text-accent/70 font-medium">{year}</span>
                <p className={`text-sm font-body ${current ? 'text-base-content font-medium' : 'text-base-content/60'}`}>
                  {event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Passions ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5">
        <h3 className="font-display font-bold text-base text-base-content mb-3">Passions</h3>
        <div className="flex flex-wrap gap-2">
          <PassionTag icon={Zap} label="Open Source" />
          <PassionTag icon={Heart} label="UI/UX Design" />
          <PassionTag icon={Coffee} label="Tech africaine" />
          <PassionTag icon={GraduationCap} label="Apprendre en continu" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
