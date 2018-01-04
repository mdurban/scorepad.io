var ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js(x|$)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: ['url-loader']
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
