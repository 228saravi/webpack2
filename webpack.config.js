

const path = require('path');
const HtmlWP=require('html-webpack-plugin');

const PATHS={
    source: path.join(__dirname,'source'),
    build: path.join(__dirname,'build')
}

module.exports = {
    entry: PATHS.source + '/index.js',
    context: path.resolve(__dirname),
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test:/\.pug$/,
                loader:'pug-loader',
                options:{
                    pretty:true
                }
            }
        ]
    },
    plugins: [
        new HtmlWP ({
            template: PATHS.source+'/index.pug'
        })
    ]
};
