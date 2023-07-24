import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import devServer from "webpack-dev-server";
import { IEnv, buildOptions } from "./types";

export const buildWebpackConfig = ({env,paths}:buildOptions): webpack.Configuration => {
    const isDev = env.mode !== 'production';
    return {
      entry: {
        index: paths.entry,
      },
      mode: env.mode || "development",
      module: {
        rules: [
          {
            test: /\.tsx?$/,  
            use: "ts-loader",
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template:paths.html,
        }),
        new webpack.ProgressPlugin(),
      ],
      devtool:isDev ? "inline-source-map" : undefined,
      devServer: isDev ? {
        port: 3000,
        open: true,
      }: undefined,
      output: {
        path: paths.output,
        filename: "[name].[contenthash].js",
        clean: true,
      },
    };
  };