const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    menu: './src/menu?js',
    contact: './src/contact.js',
    footer: './src/footer.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lily's table",
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.svg',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  mode: "production",
};
