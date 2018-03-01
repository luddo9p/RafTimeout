const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
	entry: ["babel-polyfill", "./src/init.js"],
	watch: true,
	output: {
		path: path.resolve(__dirname, ""),
		filename: "./dist/main.min.js"
	},
	// plugins: [
	// 	new UglifyJsPlugin({
	// 		sourceMap: true,
	// 		test: /\.js($|\?)/i
	// 	})
	// ],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
}
