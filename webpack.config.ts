/* global __dirname */
import * as webpack from 'webpack';
import WebpackPwaManifest = require('webpack-pwa-manifest');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import WorkboxPlugin = require('workbox-webpack-plugin');
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import { resolve } from 'path';

module.exports = function(env?: any): webpack.Configuration {
  const entryArray: string[] = ['./src/app/index.tsx'];

  const isProd = env && env.production;

  if (!isProd) entryArray.push('webpack-hot-middleware/client?path=/__hmr&reload=true&timeout=2000');

  return {
    mode: isProd ? 'production' : 'development',
    entry: entryArray,
    output: {
      path: __dirname,
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: true,
              filename: resolve('.babelrc')
            }
          }
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Randomizer',
        template: './src/app/assets/index.html',
        favicon: './src/app/assets/favicon.png',
        inject: 'body'
      }),
      new WebpackPwaManifest({
        'short_name': 'Randomizer',
        'name': 'Randomizer',
        'icons': [
          {
            'src': './src/app/assets/homescreen_icon_192.png',
            'size': '192x192'
          },
          {
            'src': './src/app/assets/homescreen_icon_512.png',
            'size': '512x512'
          }
        ],
        'start_url': '/?source=randomizer',
        'background_color': '#008B8B',
        'display': 'standalone',
        'scope': '/',
        'theme_color': '#00b3b3'
      }),
      new WorkboxPlugin.InjectManifest({
        swDest: './service-worker.js',
        swSrc: './src/app/sw/index.js',
        include: [/\.html$/, /\.js$/, /\.png$/]
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', 'json']
    }
  };
};
