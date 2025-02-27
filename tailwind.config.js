export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        carouselSlide: {
          "0%": { transform: "translateX(0%)" },
          "20%": { transform: "translateX(0%)" }, // Pause on the first slide
          "25%": { transform: "translateX(-100%)" },
          "45%": { transform: "translateX(-100%)" }, // Pause on the second slide
          "50%": { transform: "translateX(-200%)" },
          "70%": { transform: "translateX(-200%)" }, // Pause on the third slide
          "75%": { transform: "translateX(-300%)" },
          "95%": { transform: "translateX(-300%)" }, // Pause on the fourth slide
          "100%": { transform: "translateX(-400%)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        
      },
      animation: {
        "carousel-slide": "carouselSlide 30s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-up": "fadeUp 1s ease-out",
        "zoom-in": "zoomIn 1s ease-out",
      },
    },
  },
  plugins: [],
};
