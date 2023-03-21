const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000, //default 8080
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,

        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
