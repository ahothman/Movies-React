const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: {
    main: "./src/client/app.tsx"
  },

  output: {
    filename: "index.js",
    path: __dirname + "/build"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CopyPlugin([{ from: "./src/client/styles.css", to: "." }])]
};
