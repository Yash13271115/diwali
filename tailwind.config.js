/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'berkshire-swash': ['Berkshire Swash', 'sans-serif'], // Add Berkshire Swash
        'dancing-script': ['Dancing Script', 'sans-serif'], // Add Dancing Script
        'great-vibes': ['Great Vibes', 'sans-serif'], // Add Great Vibes
        'gurajada': ['Gurajada', 'sans-serif'], // Add Gurajada
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'], // Add Montserrat Alternates
        'pacifico': ['Pacifico', 'sans-serif'], // Add Pacifico
        'playfair-display': ['Playfair Display', 'sans-serif'], // Add Playfair Display
        'satisfy': ['Satisfy', 'sans-serif'], // Add Satisfy
        'bodoni-moda': ['Bodoni Moda', 'sans-serif'], // Add Bodoni Moda
      },
      animation: {
        top_down : 'from_top_to_down 0.75s ease-in-out'
      },
      keyframes: {
        from_top_to_down: {
          '0%' : { bottom:'100%' },
          '50%' : { bottom:'0%' },
          '80%' : { bottom:'20%' },
          '100%' : { bottom:'0%' }
        }
      }
    },
  },
  plugins: [],
};
