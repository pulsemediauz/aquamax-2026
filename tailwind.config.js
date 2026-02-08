/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "surface-light": "#ffffff",
                "surface-dark": "#1a2632",
                "primary-dark": "#0b5cb5",
                "accent": "#FFD700",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            keyframes: {
                fillWater: {
                    '0%': { height: '0%' },
                    '100%': { height: '100%' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateX(-25%)' },
                    '50%': { transform: 'translateX(0%)' },
                }
            },
            animation: {
                fillWater: 'fillWater 2s ease-out forwards',
                wave: 'wave 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
