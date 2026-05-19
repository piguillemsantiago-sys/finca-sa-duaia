/** Tailwind config — replaces the inline `tailwind.config` the prototype loaded
 *  from cdn.tailwindcss.com. Same theme tokens; compiled to css/site.css. */
module.exports = {
  content: ["./index.html", "./Legal.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        cream:  "#F9F0E3",
        linen:  "#FAF7F2",
        garnet: "#7C1621",
        gold:   "#C89211",
        ink:    "#1A1410",
        earth:  "#A8896C",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans:    ["Montserrat", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
    },
  },
  /* Classes built by string concatenation in app.jsx — the static extractor
   * cannot see them, so they are listed explicitly. */
  safelist: [
    "hover:text-ink",
    "hover:text-cream",
    "text-gold/80",
    "text-garnet/80",
  ],
  plugins: [],
};
