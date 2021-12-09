import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
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
          // { options: { outputPath: "css/", name: "[name].min.css" } },
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(mp3|wav)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "",
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    compress: true,
    hot: true,
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
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: false,
      template: path.join(__dirname, "./src/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};

export default config;
