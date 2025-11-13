/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#E9E9E9", // near-black background
          blue: "#0055FF", // cards
          lime: "#E6FF8A", // lively lime accent
          text: "#1E2015", // primary text
          sub: "#6F6F6F", // secondary text
          line: "#FAFAFA", // subtle borders
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "ui-sans-serif", "Arial"],
        mono: [
          "Space Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        inter: ["Inter"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontSize: {
        base: ["18px", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};
