module.exports = {
    entry: "./react/tabs.js",
    output: {
        path: __dirname + "/react",
        filename: "tabs.webpack.js"
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }
        ]
    }
}