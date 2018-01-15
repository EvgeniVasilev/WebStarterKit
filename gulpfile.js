var gulp = require("gulp")
var uglifyJS = require("gulp-uglify")
var autoprefixer = require("gulp-autoprefixer")
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync')
var cleanCss = require("gulp-clean-css")
var responsive = require("gulp-responsive-images")

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

gulp.task('responsive', function () {
  gulp.src('./images/**/*')
    .pipe(responsive({
      'nebula.jpg': [{
        width: 800 * 2,
        suffix: '-800-2x',
        height: 350,
      },
      {
        width: 800 * 3,
        suffix: '-800-3x',
        height: 350,
      }],
      '*.jpg': [{
        width: 800,
        height: 350,
        crop: true
      }]
    }))
    .pipe(gulp.dest('build/images'));
});

gulp.task("serve", function () {
  browserSync.init({
    server: '.',
    port: 3000
  })
  gulp.watch(["./styles/*.css", "./js/*.js"], ["processCSS", "minify"]).on("change", browserSync.reload)
  gulp.watch("*.html").on("change", browserSync.reload)
})
