import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FDFD96', /* Amarelo pastel */
        'secondary': '#FF8C00', /* Laranja escuro */
        'accent': '#8B4513', /* Marrom Sela */
        'light': '#FFFACD', /* Creme de limão */
        'dark': '#483D8B' /* Azul Escuro */,
        'transparentBg': 'rgba(255, 255, 255, 0.5)' /* Branco transparente */
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Poppins: ["var(--font-Poppins)"]
      }
    },
  },
  
  plugins: [nextui()]
};
export default config;
