var webpack = require('webpack');
var providePlugin = new webpack.providePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});
module.exports = {
	entry: {
		index: './src/js/index.js'
	},
	output: {
		path: './static/dist',
		publicPath: 'http://localhost:8080/static/dist/',
		filename: '[name].js',
	},
	module: {	
		loaders: [	
			{test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets:['react', 'es2015']
				}	
			},
			// { test: /\.js$/, loader: 'jsx-loader?harmony' },
									
			// {test: require.resolve('./src/js/tool/jquery'), loader: 'exports-loader?jQuery'},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			// { test: /\.(png|jpg)$/, loader: ['image?...','url?limit=1000&name=img/[hash:8].[name].[ext]']},
			{ test: /\.less$/, loader:'style-loader!css-loader!less-loader'},
		]
	},
	plugins: [providePlugin],
};