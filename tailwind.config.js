/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    
    extend: {
      colors:{
        myblueOne:'#026465',
        myblueTwo:'#06AB96',
        blueL:'#038477',
        blueB:'#103557',
        blueM:'#E1EEED',
        'stone-100':'#F2F6F6',

        
        
      },
      fontSize:{
        sm:'15px',
        exsm:'10px'
      },
      
      height:{
        h128:'611px'
      }
    },
  },
  plugins: [],
}

