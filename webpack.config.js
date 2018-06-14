var path = require('path');

module.exports = {
    entry: './src/js/channel_main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'channel_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]            
    }
}