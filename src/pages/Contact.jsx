import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, MapPin, MessageSquare } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

// Styled input component
function FormField({ label, type = 'text', placeholder, value, onChange, multiline = false }) {
  const baseClass = `w-full bg-surface-elevated border border-surface-border rounded-2xl px-4 py-3
    text-sm font-body text-base-content placeholder:text-base-content/30
    focus:outline-none focus:border-accent/50 focus:bg-surface-card focus:shadow-glow-sm
    transition-all duration-200`

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-mono text-base-content/50 uppercase tracking-wider pl-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClass}
        />
      )}
    </div>
  )
}

// Social link card
function SocialCard({ icon: Icon, label, handle, href, color, bg }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-2xl glass
                 hover:border-white/10 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
    >
      <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
        <Icon size={16} className={color} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-mono text-base-content/40 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-body font-medium text-base-content truncate">{handle}</p>
      </div>
    </a>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  const resetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setSent(false)
  }

  return (
    <motion.div
      className="pt-4 pb-6 space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Header ── */}
      <motion.div variants={itemVariants}>
        <h2 className="font-display font-black text-2xl text-base-content mb-1">Contact</h2>
        <p className="text-sm text-base-content/50 font-body">Discutons de ton prochain projet</p>
      </motion.div>

      {/* ── Availability banner ── */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 p-4 rounded-2xl border border-accent/20 bg-accent/5">
        <div className="relative flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent/40 animate-ping" />
        </div>
        <div>
          <p className="text-sm font-body font-medium text-accent">Disponible pour missions</p>
          <p className="text-xs text-base-content/50 font-body">Freelance · Stage · CDI — Réponse sous 24h</p>
        </div>
        <MapPin size={14} className="text-base-content/30 ml-auto flex-shrink-0" strokeWidth={1.5} />
      </motion.div>

      {/* ── Contact form ── */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-surface-card border border-surface-border shadow-card p-5">
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-surface-border">
          <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
            <MessageSquare size={15} className="text-accent" strokeWidth={2} />
          </div>
          <h3 className="font-display font-bold text-base text-base-content">Envoie un message</h3>
        </div>

        {sent ? (
          /* ── Success state ── */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shadow-glow">
              <CheckCircle size={30} className="text-accent" strokeWidth={1.8} />
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-lg text-base-content mb-1">Message envoyé !</p>
              <p className="text-sm text-base-content/50 font-body">Je te réponds sous 24h. Merci 🙏</p>
            </div>
            <button
              onClick={resetForm}
              className="px-5 py-2 rounded-xl glass text-sm font-body text-base-content/60 hover:text-accent transition-all duration-200"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          /* ── Form fields ── */
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Nom" placeholder="Ton nom" value={form.name} onChange={handleChange('name')} />
              <FormField label="Email" type="email" placeholder="ton@email.com" value={form.email} onChange={handleChange('email')} />
            </div>
            <FormField label="Sujet" placeholder="Le sujet de ton message" value={form.subject} onChange={handleChange('subject')} />
            <FormField label="Message" placeholder="Dis-moi tout..." value={form.message} onChange={handleChange('message')} multiline />

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email || !form.message}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                         bg-accent text-surface font-display font-bold text-sm
                         hover:shadow-glow disabled:opacity-40 disabled:cursor-not-allowed
                         active:scale-95 transition-all duration-200"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={15} strokeWidth={2.5} />
                  Envoyer le message
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>

      {/* ── Social links ── */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h3 className="font-display font-semibold text-sm text-base-content/50 uppercase tracking-widest px-1">Réseaux</h3>
        <div className="space-y-2">
          <SocialCard icon={Mail} label="Email" handle="ehouabolet.mathis@example.com" href="mailto:ehouabolet.mathis@example.com" color="text-accent" bg="bg-accent/10" />
          <SocialCard icon={Github} label="GitHub" handle="@ehouabolet-mathis" href="https://github.com" color="text-base-content" bg="bg-surface-elevated" />
          <SocialCard icon={Linkedin} label="LinkedIn" handle="Ehouabolet Mathis" href="https://linkedin.com" color="text-info" bg="bg-info/10" />
          <SocialCard icon={Twitter} label="Twitter / X" handle="@ehouabolet_mathis" href="https://twitter.com" color="text-secondary" bg="bg-secondary/10" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
