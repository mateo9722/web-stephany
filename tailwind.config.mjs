/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                nude: '#e4c9b6',
                rose: 'var(--color-bg-soft)',
                sage: '#697962',
                text: 'var(--color-text)',
            },
        },
    },
    plugins: [],
};