import daisyui from "daisyui"
import preline from "preline/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],  
  plugins: [
    daisyui,
    preline,
  ],
}
