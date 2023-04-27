/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontSize: {
        body: ["16px", "26px"],
        h1: ["72px", "72px"],
        h2: ["40px", "48px"],
        h3: ["32px", "36px"],
        h4: ["24px", "32px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
