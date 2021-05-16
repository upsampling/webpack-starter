const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
 
module.exports = {
 
    mode: "development",
    entry: './src/index.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader'],

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(), 
        new MiniCssExtract(),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
             
        })
        
        
    ],
 
    
}
 