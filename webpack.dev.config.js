const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, './src/index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hot: true,
        inline: true,
        stats: {
            colors: true
        },
        historyApiFallback: true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            myRedux: path.join(__dirname, 'src/redux')
        }
    }
}