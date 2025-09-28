// tailwind.config.ts
import type { Config } from 'tailwindcss'


const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 500ms ease-out forwards',
                'fade-in-slow': 'fade-in 1000ms ease-out forwards',
                'fade-in-up': 'fade-in-up 600ms ease-out forwards',
            },
        },
    },
    plugins: [],
}

export default config