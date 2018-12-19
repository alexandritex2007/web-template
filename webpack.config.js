const webpack = require('webpack');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = {
  output: {
    filename: "bundle.js"
  },
  mode: 'none',
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery' }),
    new UglifyEsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }]
              ]
            }
          }
        ]
      }
    ]
  }
}