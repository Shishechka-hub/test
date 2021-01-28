"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        port: 4000,
        notify: true,
        proxy: 'test.loc'
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(paths.modules.watch, gulp.parallel("modules"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.images.watch, gulp.parallel("fontgen"));
    gulp.watch(paths.webp.watch, gulp.parallel("webp"));
});

gulp.task("serveJc", () => {
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
});