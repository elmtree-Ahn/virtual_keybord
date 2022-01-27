const path = require("path");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtracrPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true
  },
  devtool: "source-map", 
  mode: "development", 
  plugins: [
    new HtmlWebpack({
      title: "keybord",
      template: "./index.html",
      inject: "body",
      // favicon: "./favicon.ico"
    }),
    new MiniCssExtracrPlugin({
      filename: "style.css" 
    })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtracrPlugin.loader, "css-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin()
    ]
  }
}