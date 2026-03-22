# 🚀 Portfolio Dev.AI — GOMYCODE

Portfolio fullstack moderne style **mobile app UI**, construit avec React + TailwindCSS + DaisyUI + Framer Motion.

---

## ✨ Features

- 📱 **Mobile-first** — Navigation bottom bar style iOS/Android
- 🌙 **Dark mode** natif avec thème DaisyUI personnalisé
- ✨ **Animations fluides** — Framer Motion page transitions + micro-interactions
- 🎨 **Design premium** — Glassmorphism, glow effects, dot grid background
- ⚡ **Performance** — Vite build ultra-rapide
- ♿ **Accessible** — Attributs ARIA de base respectés

## 🗂️ Structure

```
portfolio-dev/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx     ← Navigation principale
│   │   └── TopBar.jsx        ← Barre de statut
│   ├── layouts/
│   │   └── AppLayout.jsx     ← Layout avec ambient glow
│   ├── pages/
│   │   ├── Home.jsx          ← Hero + stat cards
│   │   ├── About.jsx         ← Profil + timeline
│   │   ├── Skills.jsx        ← Progress bars animées
│   │   ├── Projects.jsx      ← Cartes projets filtrables
│   │   └── Contact.jsx       ← Formulaire + réseaux
│   ├── hooks/
│   │   └── useScrollY.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🛠️ Installation

### 1. Pré-requis
- Node.js 18+ installé
- npm ou yarn

### 2. Cloner / Placer le dossier sur le Bureau
```bash
cd ~/Desktop
```

### 3. Installer les dépendances
```bash
cd portfolio-dev
npm install
```

### 4. Lancer en développement
```bash
npm run dev
```
Ouvrir → http://localhost:5173

### 5. Build production
```bash
npm run build
npm run preview
```

---

## 🎨 Personnalisation

### Changer le nom / infos
- `src/pages/Home.jsx` → modifier le nom, les tags, les stats
- `src/pages/About.jsx` → modifier la bio, la timeline
- `src/pages/Contact.jsx` → modifier les liens sociaux et l'email

### Changer la couleur accent
Dans `tailwind.config.js` → `colors.accent.DEFAULT` (défaut : `#00F5A0`)

### Ajouter un projet
Dans `src/pages/Projects.jsx` → ajouter un objet dans le tableau `PROJECTS`

---

## 📦 Dépendances principales

| Package | Usage |
|---------|-------|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Animations |
| `lucide-react` | Icônes |
| `tailwindcss` | Styling utility-first |
| `daisyui` | Composants UI |
| `vite` | Build tool |

---

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier dist/
```

---

Fait avec ❤️ à Abidjan — GOMYCODE 2024
"# Portfolio-IA" 
