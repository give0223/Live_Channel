var path = require('path');

module.exports = {
    entry: './src/js/channel_main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'channel_bundle.js'
    },
    module: {
        rules: [
            {//for trun ES6 to ES5
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            },
        ]            
    },
    plugins: [

    ]
}