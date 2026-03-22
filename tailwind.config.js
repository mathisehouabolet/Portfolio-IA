/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#00F5A0',
          dark: '#00D68F',
          glow: 'rgba(0, 245, 160, 0.3)',
        },
        surface: {
          DEFAULT: '#0F1117',
          card: '#161B27',
          elevated: '#1C2333',
          border: '#252D3D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 245, 160, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 245, 160, 0.5)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 245, 160, 0.2)',
        'glow': '0 0 30px rgba(0, 245, 160, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 245, 160, 0.4)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 50px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary": "#00F5A0",
          "secondary": "#7B61FF",
          "accent": "#FF6B6B",
          "neutral": "#161B27",
          "base-100": "#0F1117",
          "base-200": "#161B27",
          "base-300": "#1C2333",
          "base-content": "#E8EAED",
          "info": "#3ABFF8",
          "success": "#00F5A0",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    darkTheme: "portfolio",
  },
}
