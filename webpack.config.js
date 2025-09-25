// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

    const config = {

        entry: {
            app: './src/index.tsx'
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash].js'
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },

                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    options: { allowTsInNodeModules: true }
                },

                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },

                {
                    test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
                    // loader: 'file-loader'
                    type: 'asset/resource'
                },

                {
                    test: /\.(wav|mp3|ogg|flac)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/media/[name].[hash][ext]'
                    }
                },

                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },

                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },

                {
                    test: /app.*\.html$/,
                    loader: 'html-loader'
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html'
            }),
            new webpack.ProvidePlugin({
                'window.jQuery': 'jquery'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        globOptions: {
                            ignore: [
                                '**/index.html'
                            ]
                        }
                    }
                ]
            })
        ],

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },

        devServer: {
            port: 8081,
            open: true,
            historyApiFallback: true
        },

        performance: {
            hints: false
        }

    };

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};
