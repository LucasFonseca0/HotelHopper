import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0FFFF" ,
        secondary: "#FFA500" /* Laranja */,
        accent: "#1E90FF" /* Azul Dodger */,
        light: "#ADD8E6" /* Azul Claro */,
        dark: "#00008B" /* Azul Escuro */,
        transparentBg: "rgba(0, 0, 255, 0.3)" /* Azul Transparente */,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
      },
    },
  },

  plugins: [nextui()],
};
export default config;
 