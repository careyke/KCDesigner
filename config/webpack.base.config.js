const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const IS_DEV = process.env.NODE_ENV === 'development';
const ROOT_PATH = path.resolve(__dirname, '../'); //chunfengshili/
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
// const BUILD_PATH = path.resolve(ROOT_PATH, 'public');
const BUILD_PATH=path.resolve(ROOT_PATH,'server/public');
const JS_NAME = IS_DEV ? 'js/[name].js' : 'js/[name].[chunkhash:8].js';
const CSS_NAME = IS_DEV ? 'css/[name].css' : 'css/[name].[chunkhash:8].css';
const STYLE_NAME = IS_DEV ? '[name]_[local]_[hash:base64:4]' : '[hash:base64:8]';
// const SERVER_PATH=path.resolve(ROOT_PATH,'server');

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH, 'app.js')
    },
    output: {
        path: path.resolve(BUILD_PATH),
        filename: JS_NAME,
        publicPath: './public/'  //和服务端的静态路径相匹配，配置这个属性会使打包文件里面的路径前面加一个这个路径
    },
    //在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
    resolve: {
        extensions: ['.js', 'jsx']
    },
    plugins: [
        new ExtractTextPlugin(CSS_NAME, { allChunks: true })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: [SRC_PATH],
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }, {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            modules: true,
                            localIdentName: STYLE_NAME, //本地css样式类名
                            minimize: !IS_DEV
                        }
                    },
                        'postcss-loader',
                        'less-loader'
                    ],
                    publicPath: path.resolve(BUILD_PATH, 'css')
                })
            }, {
                test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
                use: ['url-loader']
            }, {
                test: /\.(png|jpe?g|gif)$/,
                //大于10kb的图片，会拷贝到生产目录，css上使用会出错，需要js来引入
                use: ['url-loader?limit=10240&name=img/[hash:8].[name].[ext]']
            }, {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    }
}