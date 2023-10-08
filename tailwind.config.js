/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
                  
          primary: "#c7ffaf",
                  
          secondary: "#e0945e",
                  
          accent: "#f7f975",
                  
          neutral: "#231523",
                  
          "base-100": "#343041",
                  
          info: "#749bf1",
                  
          success: "#66e1b4",
                  
          warning: "#c98703",
                  
          error: "#f83816",
          body: {
            "background-color": "#231523",
          }
        },
      },
    ],
  },
};
