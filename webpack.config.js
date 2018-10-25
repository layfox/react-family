const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
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
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/dist/'
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
                use: [
                    MinCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MinCssExtractPlugin.loader,
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
        }),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new MinCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkname: '[id].[hash].css'
        })
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            myRedux: path.join(__dirname, 'src/redux')
        }
    },
    optimization: {
        splitChunks: {
            name: 'vendor'
        }
    }
}