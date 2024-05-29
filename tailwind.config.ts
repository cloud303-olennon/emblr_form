import { Secondary } from "flowbite-svelte";
import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#ddedf8",
          100: "#d2e7f6",
          200: "#c7e2f4",
          300: "#a5d0ed",
          400: "#62acdf",
          500: "#1e89d1",
          600: "#1b7bbc",
          700: "#17679d",
          800: "#12527d",
          900: "#0f4366",
        },
        secondary: {
          50: "#f8faff",
          100: "#f5f8ff",
          200: "#f3f7ff",
          300: "#ebf2fe",
          400: "#dce8fe",
          500: "#cddefd",
          600: "#b9c8e4",
          700: "#9aa7be",
          800: "#7b8598",
          900: "#646d7c",
        },
        tertiary: {
          50: "#e1e8f3",
          100: "#d7e0f0",
          200: "#ced8ec",
          300: "#b0c1e0",
          400: "#7493c9",
          500: "#3964b2",
          600: "#335aa0",
          700: "#2b4b86",
          800: "#223c6b",
          900: "#1c3157",
        },
      },
    },
  },
} as Config;

// module.exports = config;
