/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Corporate color palette - Navy Blue + Gold
        navy: {
          900: '#0a1628',
          800: '#0f1d33',
          700: '#152540',
          600: '#1c2f4d',
          500: '#243a5a',
          400: '#3d5a80',
          300: '#5a7fa8',
          200: '#98b3d1',
          100: '#c8d8e8',
          50: '#e8eff7',
        },
        gold: {
          500: '#c9a227',
          400: '#d4b43a',
          300: '#e0c44d',
          200: '#ebd460',
          100: '#f5e473',
          600: '#b08d1f',
          700: '#967516',
        },
        cream: {
          50: '#faf9f6',
          100: '#f5f3ef',
          200: '#ebe8e2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
