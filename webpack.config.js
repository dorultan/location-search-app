const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: process.env.NODE_ENV || 'development',
	entry: ["babel-polyfill", "./app/index.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	module: {

		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.less$/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			}
		]
	},

	devServer: {
		port: process.env.PORT || 3000,
		historyApiFallback: true,
		contentBase: './dist'
	},

	plugins: [
		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		})
	]
};

module.exports = config;