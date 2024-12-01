import { transformWithEsbuild } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg1": "#2C2B28",
        "bg2": "#393937",
        "bg3": "#282725",
        "bg4": "#21201C",
        "bg5": "#2F2F2B",
        "bg6": "#1A1915",
        "bg7": "#1a1a1a",
        "bg8": "#1e1e49",
        "text1": "#E5E5E2",
        "text2": "#A6A39A",
        "btext": "#3F91E3",
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        'f1': '"Jaro", sans-serif',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'move-x': 'moveX 2s ease-in-out infinite',
        typing: 'typing 2s steps(30) ',
        'blink': 'blink 1s ease-in-out 4',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}