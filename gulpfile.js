var gulp = require('gulp')
var uglifyJS = require('gulp-uglify')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync')
var cleanCss = require('gulp-clean-css')
var responsive = require('gulp-responsive-images')

gulp.task('minify', function () {
  gulp.src('./js/*.js')
    .pipe(uglifyJS())
    .pipe(gulp.dest('build/js'))
})

gulp.task('processCSS', function () {
  gulp.src('./styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
})

gulp.task('responsive', function () {
  gulp.src('./images/**/*')
    .pipe(responsive({
      'nebula.jpg': [{
        width: 300,
        suffix: '-300',
        gravity: 'Center'
      },
      {
        width: 300 * 2,
        suffix: '-300-2X',
        gravity: 'Center'
      },
      {
        width: 680,
        suffix: '-680',
        crop: true,
        gravity: 'Center'
      },
      {
        width: 680 * 2,
        suffix: '-680-2x',
        crop: true,
        gravity: 'Center'
      }
      ],
      '*.jpg': [{
        width: 950,
        height: 400,
        gravity: 'Center',
        crop: true
      }]
    }))
    .pipe(gulp.dest('build/images'))
})

gulp.task('serve', function () {
  browserSync.init({
    server: '.',
    port: 3000
  })
  gulp.watch(['./styles/*.css', './js/*.js'], ['processCSS', 'minify']).on('change', browserSync.reload)
  gulp.watch('*.html').on('change', browserSync.reload)
})
