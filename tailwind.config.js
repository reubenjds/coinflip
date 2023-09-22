/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,html,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['aqua']
  },
  plugins: [require("daisyui")],
}

