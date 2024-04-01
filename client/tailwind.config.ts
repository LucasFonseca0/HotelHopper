import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0FFFF" ,
        secondary: "#FFA500" ,
        accent: "#1E90FF" ,
        light: "#ADD8E6" ,
        dark: "#00008B" ,
        transparentBg: "rgba(0, 0, 255, 0.3)" ,
      },
      
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
      },
    },
  },

  plugins: [nextui()],
};
export default config;
 
