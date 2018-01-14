var gulp = require("gulp")
var uglifyJS = require("gulp-uglify")
var autoprefixer = require("gulp-autoprefixer")
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync')
var cleanCss = require("gulp-clean-css")


gulp.task("minify", function () {
    gulp.src("./js/*.js").
        pipe(uglifyJS()).
        pipe(gulp.dest("build/js"))
})

gulp.task("processCSS", function () {
    gulp.src('./styles/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build/css"))
})

gulp.task("serve", function () {
    browserSync.init({
        server: '.',
        port: 3000
    })
    gulp.watch(["./styles/*.css", "./js/*.js"], ["processCSS", "minify"]).on("change", browserSync.reload)
    gulp.watch("*.html").on("change", browserSync.reload)
})
