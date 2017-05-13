import webpack from 'webpack'
import fs from 'fs'
import path from 'path'
import { prod } from './config/env'

export default {
  // js entry
  entry: () => './app.js',
  output: {
    filename: 'server.bundle.js',
    path: __dirname
  },

  // file resolve
  resolve: {
    extensions: ['.js', '.json']
  },

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(
    path.resolve(__dirname, 'node_modules')
  ).reduce((ext, mod) => {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  // node env path
  node: {
    __filename: true,
    __dirname: true
  },

  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': prod
    })
  ]
}
