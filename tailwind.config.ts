const {
	default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [
		addVariablesForColors,
		require('daisyui'),
		function ({ addUtilities }: any) {
			const containerUtility = {
				'.cont': {
					'padding-left': '25px',
					'padding-right': '25px',
					'@screen sm': {
						'padding-left': '40px',
						'padding-right': '40px'
					},
					'@screen md': {
						'padding-left': '54px',
						'padding-right': '54px'
					},
					'@screen 2xl': {
						'padding-left': '54px',
						'padding-right': '54px'
					}
				}
			}
			addUtilities(containerUtility, ['responsive'])
		}
	],
	daisyui: {
		themes: ['black'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars
	})
}
