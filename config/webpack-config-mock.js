// webpack-dev-mock.js

// configuration data related to development only

const path = require("path");
const fs = require("fs");
const webpack = require("webpack");


//const paths = require("./paths");
// import common webpack config
const common = require("./webpack-config-common.js");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports =  {
    entry: [resolveApp("src/mock/index.jsx")],
    mode: "development",
    // devtool option controls if and how source maps are generated.
    // see https://webpack.js.org/configuration/devtool/
    // If you find that you need more control of source map generation,
    // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    devtool: "eval",
    plugins: [ ],
    module: {
        rules: [
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                // in the `src` directory
                include: path.resolve(resolveApp("src/mock")),
                exclude: /(node_modules)/,
                use: {
                    // use babel for transpiling JavaScript files
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"]
                    }
                }
            }

        ]
    }
};