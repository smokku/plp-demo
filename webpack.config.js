const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  entry: ['./src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-[hash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main-[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: pkg.description,
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    }),
  ],
  performance: {
    hints: false,
  },
}
