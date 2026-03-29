/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF9',
          100: '#FAF8F5',
          200: '#F5F0EB',
          300: '#EDE6DD',
        },
        navy: {
          50: '#f0f1f5',
          100: '#d1d3de',
          200: '#a3a7bd',
          300: '#74799c',
          400: '#464c7b',
          500: '#2d3359',
          600: '#1e2244',
          700: '#181c38',
          800: '#12152c',
          900: '#0c0e1f',
        },
        // Selfpause brand teal — matches the logo gradient (blue-teal → cyan)
        teal: {
          50: '#e6f7fa',
          100: '#b3e8f0',
          200: '#80d9e6',
          300: '#4dc9dc',
          400: '#26bcd4',
          500: '#0099B8',  // primary brand blue-teal
          600: '#0088A8',  // darker end of logo gradient
          700: '#007898',
          800: '#006580',
          900: '#004D63',
        },
        // Selfpause cyan — the bright end of the logo gradient
        cyan: {
          50: '#e0faf6',
          100: '#b3f2e8',
          200: '#80e9d9',
          300: '#4de0cb',
          400: '#26d9c0',
          500: '#00C9B7',  // bright cyan from logo
          600: '#00B5A4',
          700: '#009E90',
          800: '#00877B',
          900: '#006B62',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        calm: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7',
        },
        sage: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
        },
        warm: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};
