// Codes by mahdi tasha
// Importing config type of tailwindCSS
import type { Config } from 'tailwindcss'

// Defining configs of tailwindCSS
const config: Config = {
  content: [
      './app/*.{jsx,tsx}',
      './app/**/*.{jsx,tsx}',
      './component/**/*.{jsx,tsx}',
      './component/*.{jsx,tsx}',
      './chunk/**/*.{jsx,tsx}',
      './chunk/*.{jsx,tsx}',
  ],
  theme: {
      extend: {
          colors: {
              body: '#f5f4f1'
          }
      }
  },
  plugins: [],
}

// Exporting configs
export default config;
