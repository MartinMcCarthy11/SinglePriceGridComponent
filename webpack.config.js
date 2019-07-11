const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
path = require('path');


module.exports = {
    mode: 'development',
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
            }  
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    }
}