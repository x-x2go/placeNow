const path = require("path");

module.exports = {
  entry: "./asset/main.js",
  mode: "none",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.join(__dirname, "static"),
  },
};
