import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'svemirko-green': '#00B47C',
        'svemirko-yellow': '#FFAE2D',
        'svemirko-red': '#E4024E',
        'svemirko-blue': '#2A96BF',
        'hero-background': '#F5F6EE',
        karanfili: '#ffdc4b',
      },
    },
  },
  plugins: [],
};
export default config;
