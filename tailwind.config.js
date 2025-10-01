import daisyui from "daisyui"
import preline from "preline/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        border: {
          "0%": { boxShadow: "rgba(0,211,243,1) 0px 5px 15px" },
          "100%": { boxShadow: "rgba(0,211,243,0.35) 0px 5px 15px" },
        },
      },
      animation: {
        border: "border 1.5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [
    daisyui,
    preline,
  ],
}
