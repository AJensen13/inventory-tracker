const path = require('path');

module.exports = {
    entry: './src/components/app/app.jsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: '#sourcemap',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/ ,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            }
        ]
    }
}