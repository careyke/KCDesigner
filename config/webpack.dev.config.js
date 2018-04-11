const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const devConfig = webpackMerge(baseConfig, {
    devtool: 'eval',
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    node:{
        fs:'empty',
        net: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})

module.exports = devConfig;