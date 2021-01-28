"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpnewer from "gulp-newer";
import include from "gulp-file-include";
import browsersync from "browser-sync";

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(gulpnewer(paths.views.dist))
    	.pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});