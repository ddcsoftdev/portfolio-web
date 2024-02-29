/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px', // Now you can use class="text-xxs" in your project
      },
      padding: {
        '0.5': '0.125rem', // Adds a p-0.5 class with 2px padding
      },
    },
  },
  plugins: [],
}

