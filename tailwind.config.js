/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],  
  theme: {
    colors: {
      primary: '#FF90BC',
      secondary: '#FFC0D9',
      colorText: '#843D98',
      withOutStock: '#FCF1F5',
      colorTextItems: '#222222',
      purple: '#E228AE',
    },    
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      textShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)', 
      },
      fontWeight: {
        // Define los pesos de fuente personalizados
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
    
    },
  },
}

