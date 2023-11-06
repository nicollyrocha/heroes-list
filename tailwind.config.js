/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,tsx,jsx}'],
	corePlugins: {
		preflight: false,
		divideStyle: true,
	},
	important: true,
	theme: {
		extend: {
			minHeight: (theme) => ({
				...theme('spacing'),
			}),
			maxHeight: (theme) => ({
				...theme('spacing'),
			}),
			fontSize: {
				xxs: ['10px', '14px'],
				lg: ['18px', '22px'],
				xl: ['20px', '24px'],
			},
		},
	},
	plugins: [require('tailwindcss')],
};
