const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 4000,
        open: true,
        liveReload: true
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}