/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{vue,scss}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'card-dark': '0 0 8px rgb(209 213 219)',
                'card-light': '0 0 8px rgb(75 85 99)',
            }
        },
    },
    plugins: [],
}

