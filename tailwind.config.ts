import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'plt-accent': '#12b886',
        'plt-white': '#ffffff',
        'plt-white-01': 'rgba(255, 255, 255, 0.1)',
        'plt-white-02': 'rgba(255, 255, 255, 0.25)',
        'plt-white-03': 'rgba(255, 255, 255, 0.35)',
        'plt-white-04': 'rgba(255, 255, 255, 0.4)',
        'plt-white-06': 'rgba(255, 255, 255, 0.6)',
        'plt-dark-04': 'rgba(48, 48, 48, 0.4)',
        'plt-dark-2': '#828282',
        'plt-dark-4': '#424242',
        'plt-dark-5': '#3b3b3b',
        'plt-dark-6': '#2e2e2e',
        'plt-dark-7': '#242424',
        'plt-dark-8': '#1f1f1f',
        'plt-dark-9': '#141414',
        'plt-teal-4': '#38d9a9',
        'plt-teal-6': '#12b886',
        'plt-teal-8': '#099268',
        'plt-gray-04': 'rgba(48, 48, 48, 0.4)',
        'plt-gray-06': 'rgba(24, 24, 24, 0.6)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-artgen': 'linear-gradient(100.87deg, #11b785 -0.74%, #49a1f2 55.84%, #3a4eff 100.3%)',
        'gradient-artgen-soft': 'linear-gradient(123.22deg, rgba(17, 183, 133, 0.3) 4.28%, rgba(73, 161, 242, 0.3) 48.03%, rgba(58, 78, 255, 0.3) 95.59%)',
      },
      borderRadius: {
        'artgen': '8px',
        'artgen-lg': '12px',
        'artgen-xl': '30px',
      },
    },
    // Desktop-first breakpoints (max-width) - matching frontend exactly
    screens: {
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1023px' },
      'md': { max: '767px' },
      'sm': { max: '639px' },
      'screen-1900': { max: '1900px' },
      'screen-1750': { max: '1750px' },
      'screen-1500': { max: '1500px' },
      'screen-1280': { max: '1280px' },
      'screen-1250': { max: '1250px' },
      'screen-1200': { max: '1200px' },
      'screen-1000': { max: '1000px' },
      'screen-950': { max: '950px' },
      'screen-880': { max: '880px' },
      'screen-800': { max: '800px' },
      'screen-768': { max: '768px' },
      'screen-750': { max: '750px' },
      'screen-700': { max: '700px' },
      'screen-650': { max: '650px' },
      'screen-600': { max: '600px' },
      'screen-550': { max: '550px' },
      'screen-500': { max: '500px' },
      'screen-450': { max: '450px' },
      'screen-400': { max: '400px' },
    },
  },
  plugins: [],
}

export default config
