const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
	content: [
		join(__dirname, 'src/lib/**/*!(*.stories|*.spec).{ts,tsx}'),
		...createGlobPatternsForDependencies(__dirname),
	],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
		},
	},
	plugins: [],
}
