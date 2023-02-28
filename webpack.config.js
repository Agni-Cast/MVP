// var path = require("path");
// var SRC_DIR = path.join(__dirname, "/client/src");
// var DIST_DIR = path.join(__dirname, "/client/dist");

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };

// OR

// require("dotenv").config();

const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};