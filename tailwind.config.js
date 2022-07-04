/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    colors: {
      transparent: 'transparent',
    }
  },
  
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#38bdf8",
          "secondary": "#fb923c",
          "accent": "#f3f4f6",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "info": "#2B59DA",
          "success": "#135331",
          "warning": "#F9D834",
          "error": "#EA7466",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}  
