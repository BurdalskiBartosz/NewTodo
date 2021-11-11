const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-typescript"]
					}
				}
			},
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			extensions: [".tsx", ".ts", ".js"],
			Src: path.resolve(__dirname, "src/")
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};
