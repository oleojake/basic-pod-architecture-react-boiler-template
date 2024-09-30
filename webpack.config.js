const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;
const TsconfigPathPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	context: path.join(basePath, "src"),
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
		plugins: [new TsconfigPathPlugin()],
	},
	entry: {
		app: ["./index.tsx", "./global-css/reset.css", "./global-css/normalize.css"],
	},
	devtool: "eval-source-map",
	stats: "errors-only",
	output: {
		filename: "[name].[chunkhash].js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|jpg)$/,
				type: "asset/resource",
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								exportLocalsConvention: "camelCase",
								localIdentName: "[path][name]__[local]--[hash:base64:5]",
								localIdentContext: path.resolve(__dirname, "src"),
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							additionalData: `@import "global-css/main.scss";`,
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: /global-css/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.css$/,
				exclude: /global-css/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								exportLocalsConvention: "camelCase",
								localIdentName: "[path][name]__[local]--[hash:base64:5]",
								localIdentContext: path.resolve(__dirname, "src"),
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		//Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: "index.html", //Name of file in ./dist/
			template: "index.html", //Name of template in ./src
		}),
	],
};
