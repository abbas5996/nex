import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F4A049",
        "brand-bronze": "#7E4010",
        "brand-dark": "#333333",
        "brand-silver": "#DCDCDC",
        brand: {
          orange: "#F4A049",
          bronze: "#7E4010",
          dark: "#333333",
          charcoal: "#333333",
          silver: "#DCDCDC",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #F4A049, #7E4010)",
        "metallic-gradient": "linear-gradient(135deg, #FFFFFF 0%, #DCDCDC 50%, #7E4010 100%)",
        "brand-glow": "radial-gradient(circle, rgba(244,160,73,0.18) 0%, transparent 70%)",
      },
      boxShadow: {
        "brand-glow": "0 0 25px rgba(244, 160, 73, 0.35)",
        "brand-glow-lg": "0 0 45px rgba(244, 160, 73, 0.25), 0 0 25px rgba(220, 220, 220, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
