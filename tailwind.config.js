/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1d2428',
        muted: '#5f696e',
        paper: '#f7f3ec',
        panel: '#fffaf2',
        line: '#ded7cb',
        accent: '#6b7f4f',
        'accent-dark': '#465735',
      },
      boxShadow: {
        card: '0 18px 45px rgba(38, 32, 24, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
