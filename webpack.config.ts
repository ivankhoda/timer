import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    compress: true,
    port: 4000,
  },
  mode: "development",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "../index.html",
    // }),
  ],
};

export default config;
