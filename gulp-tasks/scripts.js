"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import plumber from "gulp-plumber";
import webpack from "webpack-stream";
import uglify from "gulp-uglify";
import through from "through2";
import CircularDependencyPlugin from "circular-dependency-plugin";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import browsersync from "browser-sync";

gulp.task("scripts", () => {
    return gulp.src(paths.scripts.src)
        .pipe(plumber())
        .pipe(webpack({
            mode: 'none',
            output: {
              filename: '[name].js',
            },
            devtool: 'source-map',
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
                }
              ]
            },
            plugins: [
              new CircularDependencyPlugin(),
              new DuplicatePackageCheckerPlugin()
            ]
          }))
        .pipe(through.obj(function (file, enc, cb) {
          const isSourceMap = /\.map$/.test(file.path);
          if (!isSourceMap) this.push(file);
          cb();
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(browsersync.stream());
});