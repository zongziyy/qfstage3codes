var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: "./src/main.js",
        home: "./src/home.js"
    }, //如果文件 可以修改
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash].js",
        publicPath: './', //加了一个公共路径地址
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "啊啊啊",
            template: "public/index.html",
            chunks: ['main', 'home']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name(resourcePath, resourceQuery) {
                            // `resourcePath` - `/absolute/path/to/file.js`
                            // `resourceQuery` - `?foo=bar`
                            if (process.env.NODE_ENV === 'development') {
                                return '[path][name].[ext]';
                            }
                            return '[contenthash].[ext]';
                        },
                    },
                }, ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除的目录
                // 使用babel-loader将ES6代码转为ES5，做浏览器兼容
                // 同时需要建立.babelrc文件，调用@babel/preset-env插件将E6转为E5S
                loader: "babel-loader"
            }
        ],
    },
    devServer: {
        contentBase: './dist',
        port: 4321,
        open: true
    },
}