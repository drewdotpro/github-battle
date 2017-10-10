"use strict";
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const HTMLWebpackPluginConfig = {
    template: "app/index.html"
};

if(process.env.SURGE_PUB === "true"){
    HTMLWebpackPluginConfig.filename =  "200.html"
}

const config = {
    entry: ["babel-polyfill", "whatwg-fetch", "./app/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: "babel-loader"},
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HTMLWebpackPlugin(HTMLWebpackPluginConfig)]
};

if (process.env.NODE_ENV === "production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new WebpackCleanupPlugin()
    );
}

module.exports = config;