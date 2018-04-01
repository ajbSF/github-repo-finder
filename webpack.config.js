const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        //use: [MiniCssExtractPlugin.loader,"style-loader","css-loader"]
        use: [MiniCssExtractPlugin.loader,"css-loader"]
      },
      { 
            test: /\.json$/, 
            use:{
                loader: 'json-loader' 
            }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(
        ['dist']
    ),
    new  webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    })  

  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};