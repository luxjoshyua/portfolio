const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use : ['file-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/videos/[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/projects.html",
      filename: "./projects.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/effects.html",
      filename: "./effects.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/drawings.html",
      filename: "./drawings.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};