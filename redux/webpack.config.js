module.exports = {
    entry: {
        demo: './src/js/app.js'
    },

    output: {
        path: __dirname + '/asserts',
        publicPath: '/asserts/',
        filename: 'bundle.js'
    },

    devServer: {
        // historyApiFallback: true,
        // hot: true,
        // inline: true,
        // progress: true,
        port: 9090 //端口你可以自定义
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.json', '.less', '.css']
    }
}