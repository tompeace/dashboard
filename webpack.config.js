const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    chunkFilename: './dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081
  },
  resolve: {
    alias: {
      '@helpers': path.resolve(__dirname, './src/helpers/'),
      '@store': path.resolve(__dirname, './src/store/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MonacoWebpackPlugin()
  ]
};