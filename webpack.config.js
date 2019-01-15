const webpack = require('webpack');

module.exports = {
  entry: {
    common: './src/js/common.js'
  },
  devtool: 'inline-souce-map',
  output: {
    filename: '[name].bundle.js'
  },
  mode: 'production',//development,production
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
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
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  }
}