/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                nude: '#e4c9b6',
                rose: '#d7a49a',
                'rose-light': '#e8c4bc',
                sage: '#697962',
                'sage-dark': '#5a6854',
                charcoal: '#454545',
                'charcoal-dark': '#2d2d2d',
            },
            fontFamily: {
                title: ['Playfair Display', 'serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'card': '16px',
                'card-lg': '24px',
            },
            boxShadow: {
                'soft': '0 10px 30px rgba(0, 0, 0, 0.06)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
};