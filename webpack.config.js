/**
 * Created by suyeshtiwari on 5/15/17.
 */
var path = require('path');
module.exports = {
    devServer: {
        inline: true,
        port: 8080
    },
    entry: "./src/webapp/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader' ,
                exclude: /node_modules/,
                query:{

                    presets:['es2015','stage-0']
                }
            }
        ]
    }
}