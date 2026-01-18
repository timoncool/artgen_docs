import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'plt-accent': '#12b886',
        'plt-teal-4': '#38d9a9',
        'plt-teal-6': '#12b886',
        'plt-teal-8': '#099268',
        'plt-white': '#ffffff',
        'plt-white-01': 'rgba(255, 255, 255, 0.1)',
        'plt-white-02': 'rgba(255, 255, 255, 0.25)',
        'plt-white-04': 'rgba(255, 255, 255, 0.4)',
        'plt-white-06': 'rgba(255, 255, 255, 0.6)',
        'plt-dark-2': '#828282',
        'plt-dark-4': '#424242',
        'plt-dark-5': '#3b3b3b',
        'plt-dark-6': '#2e2e2e',
        'plt-dark-7': '#242424',
        'plt-dark-8': '#1f1f1f',
        'plt-dark-9': '#141414',
        'plt-dark-04': 'rgba(48, 48, 48, 0.4)',
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
      screens: {
        'screen-1750': { max: '1750px' },
        'screen-1500': { max: '1500px' },
        'screen-1000': { max: '1000px' },
        'screen-768': { max: '768px' },
        'screen-550': { max: '550px' },
        'screen-500': { max: '500px' },
      },
      borderRadius: {
        'artgen': '8px',
        'artgen-lg': '12px',
        'artgen-xl': '30px',
      },
    },
  },
  plugins: [],
}

export default config
