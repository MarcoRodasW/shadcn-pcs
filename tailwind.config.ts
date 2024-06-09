import PluginForms from '@tailwindcss/forms';
import { Config } from 'tailwindcss';

/**
 * Generate colors with:
 * @see https://uicolors.app/create
 */
const primaryColor = {};
const secondaryColor = {};

export default <Config>{
  content: ['./src/pages/**/*.{ts,jsx,tsx,mdx}', './src/components/**/*.{ts,jsx,tsx,mdx}', './src/app/**/*.{ts,jsx,tsx,mdx}'],
  plugins: [PluginForms],
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
      },
    },
  },
};
