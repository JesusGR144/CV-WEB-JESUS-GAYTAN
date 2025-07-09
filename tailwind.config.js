// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  "./src/**/*.{html,js}",
  "./assets/**/*.html",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('daisyui'), // ¡Añadimos DaisyUI aquí!
  ],
  // Puedes añadir configuración adicional de DaisyUI aquí si lo necesitas
  // daisyui: {
  //   themes: ["light", "dark", "cupcake"], // Ejemplo de temas
  // },
}