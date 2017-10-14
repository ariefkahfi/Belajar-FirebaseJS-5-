const path = require('path');
const webpack = require('webpack');




module.exports = {
    context: path.resolve(__dirname,'app'),
    entry: {
        app:[
            './js/domain/Produk.js',
            './js/MainFirebase.js',
            './js/configure/FirebaseConfiguration.js',
            './js/firebase/FirebaseLoadData.js',
            './js/firebase/FirebaseUpdate.js'
        ]
    },
    output: {
        filename: "./app/dist/MainFirebase.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};