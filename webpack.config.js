module.exports = {
    entry: "./react/test.js",
    output: {
        path: __dirname + "/react",
        filename: "test.webpack.js"
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