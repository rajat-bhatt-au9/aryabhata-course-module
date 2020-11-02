module.exports = {
    mode:"development", //production
    entry: './src/index.js',
    output: {
        path: __dirname+'/dest',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
}