// const path = require('path');
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  // Entry point for your application
  entry: '../frontend/src/main', // Update this path to your entry file

  // Output configuration
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve('./', 'dist'), // Output directory
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: [/node_modules/], // Don't process node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: [
              '@babel/preset-env', // Transpile modern JavaScript
              '@babel/preset-react', // Transpile JSX
            ],
          },
        },
      },

      // Rule for CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'postcss-loader', // Processes CSS with PostCSS (Tailwind)
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Emits the file as a separate resource
        generator: {
          filename: 'images/[name].[hash][ext]', // Output file name format
        },
      },
    ],
  },

  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css', // Output CSS file name
    }),
  ],

  // Mode (development or production)
  mode: 'development',// Use 'production' for optimized builds
  devtool: 'source-map', // Generate source maps 
};