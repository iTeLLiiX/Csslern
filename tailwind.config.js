/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Rockstar Games inspiriert - Premium Gaming Farben
        rockstar: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          gold: '#d4af37',
          'gold-light': '#f4d03f',
          'gold-dark': '#b8941f',
          orange: '#ff6b35',
          'orange-dark': '#e55a2b',
          blue: '#00a8ff',
          'blue-dark': '#0097e6',
          purple: '#8b5cf6',
          'purple-dark': '#7c3aed',
        },
        primary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe699',
          300: '#ffd966',
          400: '#ffcc33',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9c7a0a',
          800: '#7d6008',
          900: '#5d4606',
        },
        accent: {
          50: '#fff4f0',
          100: '#ffe9e0',
          200: '#ffd3c1',
          300: '#ffbda2',
          400: '#ffa783',
          500: '#ff6b35',
          600: '#e55a2b',
          700: '#cc4921',
          800: '#b33817',
          900: '#99270d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-rockstar': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ff6b35 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00a8ff 0%, #0097e6 50%, #00a8ff 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #8b5cf6 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.98) 100%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(2deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'rockstar': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'rockstar-gold': '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)',
        'rockstar-orange': '0 0 30px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.3)',
        'rockstar-blue': '0 0 30px rgba(0, 168, 255, 0.6), 0 0 60px rgba(0, 168, 255, 0.3)',
        'rockstar-hover': '0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        'rockstar': '20px',
        'rockstar-lg': '40px',
      },
    },
  },
  plugins: [],
}
