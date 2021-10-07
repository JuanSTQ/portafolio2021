const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/images/[name][ext][query]',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use:[
          {loader: 'html-loader'}
        ]
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(jpg|png|svg)/,
        type: 'asset/resource'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html' 
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css' 
    })
  ],
  devServer:{
    compress: true,
    port: 3004,
    historyApiFallback:true,
  }
}