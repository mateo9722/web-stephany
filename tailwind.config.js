/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            /* ======================
               COLORES (REFERENCIA)
            ====================== */
            colors: {
                bg: {
                    main: "#ebe6db",
                    soft: "#d8cfc2",
                },
                primary: "#697962",
                accent: "#ae6f7d",
                text: {
                    base: "#454545",
                    soft: "#6b6b6b",
                },
            },

            /* ======================
               TIPOGRAFÍA
            ====================== */
            fontFamily: {
                title: ["Playfair Display", "serif"],
                body: ["Inter", "system-layout", "sans-serif"],
            },

            /* ======================
               RITMO EDITORIAL
            ====================== */
            spacing: {
                18: "4.5rem",
                28: "7rem",
                32: "8rem",
                36: "9rem",
            },

            /* ======================
               CONTENEDORES
            ====================== */
            maxWidth: {
                editorial: "72rem",
                narrow: "48rem",
            },

            /* ======================
               FORMAS
            ====================== */
            borderRadius: {
                xl: "1.5rem",
                "2xl": "2.5rem",
                blob: "40% 60% 55% 45% / 45% 45% 55% 55%",
            },

            /* ======================
               SOMBRAS
            ====================== */
            boxShadow: {
                soft: "0 20px 40px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [],
};