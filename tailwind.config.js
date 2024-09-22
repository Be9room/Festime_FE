/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        notoSansKr: ["Noto Sans KR", "sans-serif"]
      },
      fontSize: {
        "size-64": "4rem",
        "size-20": "1.25rem",
        "size-16": "1rem",
        "size-14": "0.875rem"
      },
      fontWeight: {
        bold: "700",
        medium: "500"
      },
      colors: {
        "grayscale-darkgray": "#424242",
        "grayscale-darkgray-20": "#42424233",
        "grayscale-darkgray-40": "#42424266",
        "grayscale-gray": "#888888",
        "grayscale-gray-20": "#88888833",
        "grayscale-gray-30": "#8888884D",
        "grayscale-gray-50": "#88888880",
        "grayscale-gray-70": "#888888B3",

        "live-red": "#FF3B3B",
        "alert-red": "#8B3535",
        "alert-red-10": "#8B35351A",
        "success-green": "#358B48",
        "success-green-10": "#358B481A",

        "text-primary": "#BBBBBB",
        "text-week": "#BBBBBB80",
        "text-zero": "#BBBBBB00",
        "background-base": "#1a1a1a",
        "background-color1": "#1b2531",
        "background-color12": "#2b2032"
      }
    }
  },
  plugins: []
};
