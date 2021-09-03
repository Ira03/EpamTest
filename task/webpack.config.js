const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

function devServer(isDev) {
  if (!isDev) {
    return {};
  }
  return {
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
    },
  };
}

const esLintPlugin = isDev =>
  isDev ? [] : [new ESLintPlugin({extensions: ['js']})];

module.exports = ({development}) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.js',
    // main: ['core-js/stable', './src/index.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
         use: ["babel-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    // ...esLintPlugin(development),
    new ESLintPlugin({extensions: ['js']}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CopyPlugin({ //если папка public будет пустая, то build не соберется
      patterns: [
        { from: './public' },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  ...devServer(development),
});
