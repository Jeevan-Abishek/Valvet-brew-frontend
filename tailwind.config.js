/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: { DEFAULT: '#120D0A', 2: '#1C1510', 3: '#241B14' },
        bone: '#EDE6D6',
        brass: { DEFAULT: '#C9A24B', light: '#E4C989', dim: '#9C7C3B' },
        ember: '#8A5A34',
        smoke: '#8A7F72',
        signal: '#4C7A5E',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
};
