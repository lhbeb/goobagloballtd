/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#16a34a',
                'primary-dark': '#15803d',
                secondary: '#dcfce7',
                'secondary-dark': '#bbf7d0',
                accent: '#22c55e',
                'bg-dark': '#0f172a',
                'bg-light': '#f8fafc',
                'text-dark': '#1e293b',
                'text-light': '#f8fafc',
            },
        },
    },
    plugins: [],
}
