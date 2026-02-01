/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
          light: '#a855f7',
        },
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
          light: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'progress-load': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: 'var(--scroll-width, 0%)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.6s ease-out 0.1s forwards',
        'fade-up-delay-2': 'fade-up 0.6s ease-out 0.2s forwards',
        'fade-up-delay-3': 'fade-up 0.6s ease-out 0.3s forwards',
        'fade-in': 'fade-in 0.3s ease-out',
        'progress-load': 'progress-load 0.3s ease-out forwards',
      },
      spacing: {
        'section': '80px',
      },
    },
  },
  plugins: [],
}
