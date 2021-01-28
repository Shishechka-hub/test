"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import sass from "gulp-sass";
import cssimport from "gulp-cssimport";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";

gulp.task("styles", () => {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(cssimport())
        .pipe(sass().on('error', sass.logError))
        .pipe(groupmedia())
        .pipe(autoprefixer([
            'last 15 versions',
            '> 1%',
            'ie 8',
            'ie 7'
            ],
        {
            cascade: true,
            grid: true
        }))
        .pipe(mincss({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(debug({
            "title": "CSS files"
        }))
        .pipe(browsersync.stream());
});