"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpnewer from "gulp-newer";

gulp.task("modules", () => {
    return gulp.src(paths.modules.src)
        .pipe(gulpnewer(paths.modules.dist))
        .pipe(gulp.dest(paths.modules.dist));
});
