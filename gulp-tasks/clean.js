"use strict";

import gulp from "gulp";
import del from "del";

gulp.task("clean", () => {
    return del(["./dist/*"]);
});

gulp.task("cleanjs", () => {
    return del(["./dist/js/*"]);
});

gulp.task("cleancss", () => {
    return del(["./dist/css/*"]);
});