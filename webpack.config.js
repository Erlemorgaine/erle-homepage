const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Changes webpack entry point. This line reflects the default entry point (src/index.js) and so is technically superfluous
    entry: { 
        index: path.resolve(__dirname, "src", "index.js") 
    },
    // Changes the name of the output folder where webpack puts build files. Default is 'dist'
    output: { 
        path: path.resolve(__dirname, "build")
    },
    // Defines loaders so that webpack can load files with different file extensions in a module
    module: {
        rules: [
            {
                // Identifies which files we want to group into a module
                test: /\.css$/,
                // css-loader allows to load CSS files with 'import' keyword, style-loader allows loading the stylesheet in the DOM
                // Order matters here!
                use: ["style-loader", "css-loader"]
            },
            {
                // Identifies which files we want to put into the module
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // For transpiling modern JS in something most browsers understand (ES5)
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    // Configure code splitting so that not all code is included in the main bundle. Helps for performance
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins:[
        // Needed to be able to load HTML files. Also injects the HTML bundles in the same file.
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}