const path = require('path');

const config = {
	plugins: [
		require('postcss-import')({
			resolve(id) {
				if (id.startsWith('@/')) {
					return path.resolve(__dirname, 'src', id.slice(2));
				}
				return id;
			},
		}),
		require('postcss-mixins'),
		require('postcss-preset-env'),
		require('postcss-nested'),
		require('cssnano')({
			preset: 'default',
		}),
		require('postcss-lighten-darken'),
		require('postcss-simple-vars'),
	],
	parser: require('postcss-comment'),
};

module.exports = config;
