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
        //! 変数（今回はheadercolor）にクロームから取ってきた番号（今回は"#0D3858"）を入れる。それを「bg-headercolor」として使う
        headercolor: "#0D3858",
        headercolor2: "#092137",
        footercolor: "#0D3657",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
