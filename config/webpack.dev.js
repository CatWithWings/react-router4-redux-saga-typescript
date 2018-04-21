var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.base.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:5].chunk.js',
        libraryTarget: "umd"
    },

    plugins: [
        new ExtractTextPlugin({
            filename : 'css/[name].css'
        })
    ],

    devServer: {
        historyApiFallback: true,
        compress: true,
        host : 'localhost',
        // host : '0.0.0.0',
        port: 8080
    }
});