"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.php",
                "./src/views/header.php",
                "./src/views/footer.php",
                "./src/views/pages/**/*.php"
            ],
            dist: "./dist/",
            watch: [
                "./src/views/**/*.php"
            ]
        },
        styles: {
            src: [
                "./src/assets/scss/**/*.{scss,sass}",
                "!./src/assets/scss/modules/*.{scss,sass}",
                "!./src/assets/scss/blocks/*.{scss,sass}"
            ],
            dist: "./dist/css/",
            watch: [
                "./src/assets/scss/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: [
                "./src/assets/js/**/*.js",
                "!./src/assets/js/modules/*.js",
                "!./src/assets/js/blocks/*.js",
            ],
            dist: "./dist/js/",
            watch: [
                "./src/assets/js/**/*.js"
            ]
        },
        modules: {
            src: "./src/assets/js/modules/**/*",
            dist: "./dist/js/modules/",
            watch: [
                "./src/js/modules/**/*"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/svg/*.{svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/webp/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/svg/*.{svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ]
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        fontgen: {
            src: "./src/fonts/*.{ttf,otf}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/*.{ttf,otf}"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
    gulp.parallel(["views", "styles", "scripts", "modules", "images", "webp", "favicons", "fontgen", "fontgen2"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "modules",  "images", "webp", "favicons", "fontgen","fontgen2"]));

export const jc = gulp.series(
    gulp.parallel(["styles", "scripts"]),
    gulp.parallel("serveJc"));

export default development;

