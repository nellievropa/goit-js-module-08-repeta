const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
               
                use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",  
                "sass-loader"],
              },
              {
             
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },

        ],
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/index1.html'}), 
    new MiniCssExtractPlugin( {filename: 'style.css'})],

    devServer: {
        port: 4444,
        open: true,
        // stats: 'errors-only',
    },

};