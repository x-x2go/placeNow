const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");

module.exports = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          ExtractCSS.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "main.js",
  },
  plugins: [new ExtractCSS("styles.css")],
};
