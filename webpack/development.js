module.exports =  {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              importLoaders: true
            }
          },
          'postcss-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    historyApiFallback: true
  },
  // build: slow, rebuild: fast, production: no, quality: original source (lines only)
  devtool: 'cheap-module-eval-source-map'
}
