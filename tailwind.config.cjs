/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './src/styles/base.css'
    ],
	theme: {
		extend: {
            colors: {
                'youtube': '#f40407',
            },
            backgroundColor: {
                'dark-1': '#171717',
                'dark-2': '#262626',
                'dark-3': '#404040',
                'dark-4': '#525252',
                'light-1': '#ffffff',
                'light-2': '#f5f5f5',
                'light-3': '#e5e5e5',
                'light-4': '#d4d4d4',
            },
            borderColor: {
                'dark-1': '#404040',
                'light-1': '#e5e5e5',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            placeholderColor: {
                'dark-1': '#ffffff',
                'dark-2': '#d4d4d4',
                'dark-3': '#a3a3a3',
                'light-1': '#000000',
                'light-2': '#404040',
                'light-3': '#525252',
            },
            textColor: {
                'dark-1': '#ffffff',
                'dark-2': '#d4d4d4',
                'dark-3': '#a3a3a3',
                'light-1': '#000000',
                'light-2': '#404040',
                'light-3': '#525252',
            },
        },
	},
	plugins: [],
}
