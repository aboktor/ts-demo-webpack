const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'async',
      minSize: 1
    }
  },
  plugins: [
    new CopyWebpackPlugin(
      {
        patterns: [{ from: "./html" }] 
      }
    ), 
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'webpack.report.html',
      openAnalyzer: false
    })
  ],
};
