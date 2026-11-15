/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm clinical navy — teal-inked authority (logo-adjacent, hospital calm)
        navy: {
          50: 'rgb(244 248 249 / <alpha-value>)',
          100: 'rgb(232 240 242 / <alpha-value>)',
          200: 'rgb(210 224 228 / <alpha-value>)',
          300: 'rgb(168 194 202 / <alpha-value>)',
          400: 'rgb(122 156 168 / <alpha-value>)',
          500: 'rgb(86 122 136 / <alpha-value>)',
          600: 'rgb(58 92 106 / <alpha-value>)',
          700: 'rgb(40 68 80 / <alpha-value>)',
          800: 'rgb(28 52 62 / <alpha-value>)',
          900: 'rgb(18 38 48 / <alpha-value>)',
          950: 'rgb(12 28 36 / <alpha-value>)',
        },
        // Logo champagne-gold — warmer, softer, still on-brand
        gold: {
          100: 'rgb(248 241 228 / <alpha-value>)',
          200: 'rgb(236 220 188 / <alpha-value>)',
          300: 'rgb(220 192 140 / <alpha-value>)',
          400: 'rgb(204 170 108 / <alpha-value>)',
          500: 'rgb(184 152 106 / <alpha-value>)',
          600: 'rgb(164 128 78 / <alpha-value>)',
          700: 'rgb(138 104 58 / <alpha-value>)',
          800: 'rgb(110 82 42 / <alpha-value>)',
          900: 'rgb(84 60 28 / <alpha-value>)',
        },
        // Brand medical teal — logo match, warmer clinical hover
        teal: {
          medical: 'rgb(26 92 107 / <alpha-value>)',
          50: 'rgb(240 247 248 / <alpha-value>)',
          100: 'rgb(216 234 237 / <alpha-value>)',
          600: 'rgb(26 92 107 / <alpha-value>)',
          700: 'rgb(22 78 90 / <alpha-value>)',
          800: 'rgb(18 64 74 / <alpha-value>)',
        },
        clinical: {
          white: 'rgb(250 251 252 / <alpha-value>)',
          line: 'rgb(226 233 236 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
