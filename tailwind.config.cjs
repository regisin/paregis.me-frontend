const colors = require('tailwindcss/colors');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	darkMode: 'class', // 'class' or 'media' or false
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				'lightest': '#dddde3',
				'light': '#bcbcc8',
				'DEFAULT': '#1b1c22',
				'dark': '#121216',
				'darkest': '#09090b',
			},
			success: {
				'lightest': '#c1ffc1',
				'light': '#96cc96',
				'DEFAULT': '#008000',
				'dark': '#005c00',
				'darkest': '#003800',
			},
			warning: {
				'lightest': '#f9be76',
				'light': '#f8ac4f',
				'DEFAULT': '#f89012',
				'dark': '#d97b08',
				'darkest': '#b26406',
			},
			danger: {
				'lightest': '#ffd8d8',
				'light': '#ff3636',
				'DEFAULT': '#ff0000',
				'dark': 'a60000',
				'darkest': '#7a0000',
			},
			info: {
				'lightest': '#d4e9fa',
				'light': '#cbe3f6',
				'DEFAULT': '#1f6dad',
				'dark': '#18578b',
				'darkest': '#124269',
			},
			white: colors.white, 
		}
	},
	plugins: [],
};

module.exports = config;
