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
                primary: '#682525',
                'primary-dark': '#431717',
                highlight: '#bf2525',
                secondary: '#fbeaea',
                'secondary-dark': '#f3caca',
                accent: '#d7a44a',
                dark: '#211a1a',
                light: '#fbf8f3',
                'bg-dark': '#211a1a',
                'bg-light': '#fbf8f3',
                'text-dark': '#2d2020',
                'text-light': '#fffaf5',
            },
        },
    },
    plugins: [],
}
