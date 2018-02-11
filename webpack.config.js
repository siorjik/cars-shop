var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: ["webpack-hot-middleware/client", path.join(__dirname, "/src/client/index.js")],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.less$/,
        //exclude: /(node_modules)/,
        //loader: 'style-loader!css-loader'
        //include: path.join(__dirname, "/public"),
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"],
          //publicPath: "/public"
        }))
      },
      {
        test: /\.css$/,
        //exclude: /(node_modules)/,
        //loader: 'style-loader!css-loader'
        //include: path.join(__dirname, "/public"),
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          //publicPath: "/public"
        }))
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
		    loader: "url-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.HotModuleReplacementPlugin()
    //new UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    //compress: true,
    //port: 9001,
    stats: {colors: true},
    //open: true,
    clientLogLevel: 'none',
    historyApiFallback: true
  }
}