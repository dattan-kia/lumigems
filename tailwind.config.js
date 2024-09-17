/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            keyframes: {
                slideDown: {
                    "0%": {
                        opacity: "0",
                        transform: "scaleY(0)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scaleY(1)",
                    },
                },
            },
            animation: {
                "slide-down": "slideDown 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
};
