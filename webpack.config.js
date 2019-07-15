const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
path = require('path');
const development = 'development';

module.exports = {
    watch: true,
    mode: development,
    entry: path.resolve(__dirname, 'src') + '/app.js',
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader: "html-loader",
                        options: {minimize:true}
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: development ? '[name].css' : '[name].[hash].css',
            chunkFilename: development ? '[id].css' : '[id].[hash].css'
          })
    ],
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    }
}