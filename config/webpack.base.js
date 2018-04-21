var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': './app/vendor.tsx',
        'app': './app/app.tsx'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }, 

            // { 
            //     enforce: "pre", 
            //     test: /\.js$/, 
            //     loader: "source-map-loader" 
            // },

            // {
            //     test: /\.(ts(x?)|js(x?))$/,
            //     loader:'react-hot-loader',
            //     exclude: /node_modules/
            // },

            { 
                test: /\.tsx?$/, 
                use:[
                    {loader:'react-hot-loader'},
                    {loader: 'babel-loader'}
                ]
            },

            {
                test: /\.(ts(x?)|js(x?))$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'cache-loader' },
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true
                        }
                    }
                ]
            },

            { // awesome
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader",
                options: {
                    limit : 10000,
                    minetype : 'application/font-woff'
                } 
            },
            { // awesome
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: "url-loader",
                options: {
                    limit : 8192,
                    name : 'img/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader: "css-loader"}, 
                        {loader: "sass-loader"}
                    ]
                })
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: 'public/index.html'
        })
    ]
};