module.exports = {
    content: ["./src/**/*.tsx", "./src/styles/classes.ts"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#E7F1FB",
                    200: "#D9E9FA",
                    300: "#1673FF",
                },
                gray: {
                    900: "#0A121E",
                },
            },
            borderRadius: {
                sm: "4px",
            },
            keyframes: {
                "privacy-rotate": {
                    "0%": { transform: "rotateX(0deg)" },
                    "100%": { transform: "rotateX(360deg)" },
                },
                "spinner-dash": {
                    "0%": {
                        "stroke-dasharray": "1, 150",
                        "stroke-dashoffset": "0",
                    },
                    "50%": {
                        "stroke-dasharray": "90, 150",
                        "stroke-dashoffset": "-35",
                    },
                    "100%": {
                        "stroke-dasharray": "90, 150",
                        "stroke-dashoffset": "-124",
                    },
                },
                "spinner-rotate": {
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "privacy-rotate": "privacy-rotate 0.5s ease-in-out",
                "spinner-dash": "spinner-dash 1.5s ease-in-out infinite",
                "spinner-rotate": "spinner-rotate 2s linear infinite",
            },
            transitionProperty: {
                width: "width",
            },
            fontSize: {
                xxs: ".625rem",
            },
            fill: ({ theme }) => ({
                gray: "#8093AB",
                danger: "red",
                black: theme("colors.black"),
                selected: theme("colors.primary.300"),
            }),
            stroke: () => ({
                gray: "#8093AB",
                black: "#0A121E",
            }),
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
}
