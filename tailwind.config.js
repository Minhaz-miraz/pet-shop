/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
        clifford: '#da373d',
        'color1': '#FFF9F4',
        'color2':'#F9DF8A',
        'color3': '#F8CCFB',
        'color4': '#ACD2FD',
        'color5': '#F9DF8A',
        'color6': '#FFF9F4',
      },
        fontFamily: {
            'adlam': ['ADLaM Display', 'serif'],
            'sora': ['Sora', 'serif'],
      },
    },
    plugins: [],
  }
}