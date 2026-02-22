export default {
  theme: {
    extend: {
      animation: {
        slowZoom: "slowZoom 20s ease-in-out infinite alternate",
        floatSlow: "floatSlow 10s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
};
