const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    //模式：开发者模式
    mode: "development",
    //入口文件
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        filename: 'bundle.js',
        //path是node.js中内置的package，用于处理路径
        path: path.resolve(__dirname, './dist')
        //.resolve解析路径为绝对路径
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_,modeules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(le|c)ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',

                        },
                        'less-loader'
                    ]
                })
            },
            {
                loader: require.resolve('file-loader'),
                exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.svg$/, /\.css$/, /\.less$/, /\.otf$/],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'source-map',
    devServer: {
        //告诉服务器从哪个目录中提供内容，只有在你想要提供文件时才需要
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,//是否压缩
        port: 8080,//端口号
        host: '0.0.0.0',
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
}