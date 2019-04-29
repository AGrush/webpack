const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    //relative reference
    entry: './src/index.js',
    output: {
      //this uses absolute file reference, current working directory (node path module needed), save into a file called build/dist.
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      //this is for the big image in image_viewer.js, used by url loader or any other direct path loader
      publicPath: 'build/'
    },
    module: {
      rules:[
        {
          //'use' is modern, 'loader' is legacy
          use: 'babel-loader',
          //if the file ends in .js apply babel
          test: /\.js$/
        },
        {
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader'
          }),
          test: /\.css$/
        },
        // {
        //   //order: right to left! //use this to inject css into html via javascript during build time
        //   use: ['style-loader', 'css-loader'],
        //   test: /\.css$/
        // }
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            //executed right to left
            {
              loader: 'url-loader',
              options: {limit: 10000}
            },
            'image-webpack-loader'
          ]
        }
      ]
    },
    plugins: [
      //tells the extract text library to take anyhing caught by the loader and save into a file called style.css
      new ExtractTextPlugin('style.css')
    ]
}

module.exports = config;