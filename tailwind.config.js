/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pattern: 'url("assets/images/bg-pattern.png")',
        descriptionImg: 'url("assets/images/description-img.png")',
        waves: 'url("assets/images/waves-2.png")',
      },
      animation: {
        bounceBars: "bouncing 2.2s ease infinite alternate",
      },
      keyframes: {
        bouncing: {
          "10%": {
            transform: "scaleY(0.3)",
          },
          "30%": {
            transform: "scaleY(1)",
          },
          "60%": {
            transform: "scaleY(0.5)",
          },
          "80%": {
            transform: "scaleY(0.75)",
          },
          "100%": {
            transform: "scaleY(0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
