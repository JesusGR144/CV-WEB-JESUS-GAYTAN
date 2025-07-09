// // postcss.config.js
// module.exports = {
//   plugins: {
//     '@tailwindcss': {}, 
//     autoprefixer: {},
//   },
// };

// postcss.config.js
module.exports = {
  plugins: {
    // si usas Tailwind 4 con PostCSS: 
    '@tailwindcss/postcss': {},            // :contentReference[oaicite:0]{index=0}
    autoprefixer: {},
    daisyui: {}
  }
}

