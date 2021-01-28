"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpnewer from "gulp-newer";
import fontgen from "gulp-ttf2woff";
import fontgen2 from "gulp-ttf2woff2";

gulp.task("fontgen", () => {
    return gulp.src(paths.fontgen.src)
        .pipe(gulpnewer(paths.fontgen.dist))
        .pipe(gulp.dest(paths.fontgen.dist))
        .pipe(fontgen())
        .pipe(gulp.dest(paths.fontgen.dist));
});

gulp.task("fontgen2", () => {
    return gulp.src(paths.fontgen.src)
        .pipe(gulpnewer(paths.fontgen.dist))
        .pipe(fontgen2())
        .pipe(gulp.dest(paths.fontgen.dist));
});