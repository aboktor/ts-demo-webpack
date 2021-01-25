const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./lib/main.js",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  plugins: [new CopyWebpackPlugin({ patterns: [{ from: "./html" }] })],
};
