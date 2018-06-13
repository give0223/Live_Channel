var path = require('path');

module.exports = {
    entry: './src/js/channel_main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'channel_bundle.js'
    }
}