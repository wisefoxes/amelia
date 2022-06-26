const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		join(__dirname, 'src/lib/**/*!(*.stories|*.spec).{ts,tsx}'),
		...createGlobPatternsForDependencies(__dirname),
	],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			basic: {
				100: '#FFF',
				200: '#F7F9FC',
				300: '#EDF1F7',
				400: '#E4E9F2',
				500: '#C5CEE0',
				600: '#8F9BB3',
				700: '#2E3A59',
				800: '#222B45',
				900: '#192038',
				1000: '#151A30',
				1100: '#101426',
				DEFAULT: '#EDF1F7',
			},
			primary: {
				100: '#F2F6FF',
				200: '#D9E4FF',
				300: '#A6C1FF',
				400: '#598BFF',
				500: '#36F',
				600: '#274BDB',
				700: '#1A34B8',
				800: '#102694',
				900: '#091C7A',
				DEFAULT: '#36F',
			},
			success: {
				100: '#F0FFF5',
				200: '#CCFCE3',
				300: '#8CFAC7',
				400: '#2CE59B',
				500: '#00D68F',
				600: '#00B887',
				700: '#00997A',
				800: '#007D6C',
				900: '#004A45',
				DEFAULT: '#00D68F',
			},
			info: {
				100: '#F2F8FF',
				200: '#C7E2FF',
				300: '#94CBFF',
				400: '#42AAFF',
				500: '#0095FF',
				600: '#006FD6',
				700: '#0057C2',
				800: '#0041A8',
				900: '#002885',
				DEFAULT: '#0095FF',
			},
			warning: {
				100: '#FFFDF2',
				200: '#FFF1C2',
				300: '#FFE59E',
				400: '#FFC94D',
				500: '#FA0',
				600: '#DB8B00',
				700: '#B86E00',
				800: '#945400',
				900: '#703C00',
				DEFAULT: '#FA0',
			},
			danger: {
				100: '#FFF2F2',
				200: '#FFD6D9',
				300: '#FFA8B4',
				400: '#FF708D',
				500: '#FF3D71',
				600: '#DB2C66',
				700: '#B81D5B',
				800: '#94124E',
				900: '#700940',
				DEFAULT: '#FF3D71',
			},
		},
		fontSize: {
			xs: ['10px', '12px'],
			sm: ['12px', '16px'],
			base: ['14px', '16px'],
			lg: ['16px', '20px'],
			xl: ['18px', '24px'],
			DEFAULT: ['14px', '16px'],
		},
		boxShadow: {
			...defaultTheme.boxShadow,
			'btn-outer': '0 0 0 6px rgb(143 155 179 / 16%)',
			'btn-outer-inner': '0 0 0 6px rgb(143 155 179 / 16%), inset 0 0 0 100vmax rgb(143 155 179 / 16%)',
		},
	},
	plugins: [],
}
