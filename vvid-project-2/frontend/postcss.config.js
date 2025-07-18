const path = require('path');

const config = {
	plugins: [
		require('postcss-import')({
			resolve: (id, basedir) => {
				if (id.startsWith('@/')) {
					return path.resolve(__dirname, 'src', id.slice(2));
				}
				return path.resolve(basedir, id);
			},
		}),
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('postcss-preset-env'),
		require('postcss-lighten-darken'),
		require('cssnano')({
			preset: 'default',
		}),
	],
	parser: require('postcss-comment'),
};

module.exports = config;
