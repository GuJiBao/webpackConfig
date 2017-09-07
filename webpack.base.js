const path = require('path');
const webpack = require('webpack');
const publicPath = '/';

module.exports = {
    entry: {
        app: './src/app.js',
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'assets/js/[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors'].reverse()
        })
    ],
}
