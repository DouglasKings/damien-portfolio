/**
 * PostCSS Configuration
 *
 * This configuration is used by PostCSS to process CSS files.
 * It includes the Tailwind CSS plugin to enable Tailwind's utility-first
 * CSS framework and Autoprefixer to automatically add vendor prefixes to CSS rules.
 *
 * Next.js expects plugins to be defined as an object within the `plugins` property.
 */
const config = {
  plugins: {
    // Correctly define Tailwind CSS plugin using the object syntax
    "@tailwindcss/postcss": {},
    // Correctly define Autoprefixer plugin
    autoprefixer: {},
  },
};

export default config;
