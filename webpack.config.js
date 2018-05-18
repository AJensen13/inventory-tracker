const path = require('path');

module.exports = {
    entry: './src/components/app/app.jsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: '#sourcemap',
    devServer: {
      contentBase: './build'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss)$/ ,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    { loader: 'sass-loader' }
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