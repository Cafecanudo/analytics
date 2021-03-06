const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  mode: "development",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: './app.js',
  },
  devServer: {
    port: process.env.PORT || 8000,
    compress: true,
    contentBase: [
      path.join(__dirname, "public")
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      modules: path.resolve(__dirname, "node_modules"),
      jquery: 'modules/jquery/dist/jquery.min.js',
      bootst: 'moddules/bootstrap/dist/js/bootstrap.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ELAN | Eldoc Analytics',
      template: './public/index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin([
      {from: 'public/import', to: 'import'},
      {from: 'node_modules/font-awesome/fonts', to: 'fonts'},
      {from: 'node_modules/ionicons/dist/fonts', to: 'fonts'}
    ]),
    new ExtractTextPlugin('app.css'),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg|json)$/,
        loader: 'file-loader'
      }
    ]
  }
}
