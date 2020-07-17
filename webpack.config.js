const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8080  
   },  
   module: {  
      rules: [ 
         {  
               test: /\.jsx?$/,
               exclude: /node_modules/,  
               loader: "babel-loader",
            },
            {
               test: /\.css$/, 
               loader:"css-loader" ,
              // loader: "style-loader",
            },
            {
               test: /\.css$/, 
               loader:"style-loader" ,
              // loader: "style-loader",
            },
            {
               test: /\.ts$/, 
                 loader:"ts-loader",
               }  
         
      ]
         
      
      
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  
// test: /\.jsx?$/,
// test: /\.css$/, 
// test: /\.ts$/, 
// exclude: /node_modules/,  
// use: {  
//   loader: "babel-loader",
//   loader:"css-loader" ,
//   loader:"ts-loader",


// 
// {
//    test: /\.jsx?$/,
//    exclude: /node_modules/,  
//    use:  "babel-loader"
//    },
//    {
//       test: /\.css$/, 
//       use: [
//          'css-loader',
//       'style-loader',
//    ]
//    },
//    {
//       test: /\.ts$/, 
//          use:"ts-loader",
//    }
   
// ]
   


// },  