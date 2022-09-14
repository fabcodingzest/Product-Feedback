module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "10px",
      },
      colors: {
        violet: "#AD1FEA",
        "light-purple": "#CFD7FF",
        blue: "#4661E6",
        "dark-blue": "#373F68",
        "darker-blue": "#3A4374",
        "light-blue": "#62BCFA",
        grey: "#F2F4FF",
        "dark-grey": "#647196",
        bg: "#F7F8FD",
        orange: "#F49F85",
        "dark-orange": "#D73737",
      },
    },
  },
  plugins: [],
};
