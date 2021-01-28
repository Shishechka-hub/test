"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpnewer from "gulp-newer";
import webp from "gulp-webp";
import debug from "gulp-debug";

gulp.task("webp", () => {
    return gulp.src(paths.webp.src)
        .pipe(webp())
        .pipe(gulpnewer(paths.webp.dist))
        .pipe(gulp.dest(paths.webp.dist))
        .pipe(debug({
            "title": "webp"
        }));
});