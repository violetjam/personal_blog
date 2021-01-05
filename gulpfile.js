const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const notify = require('gulp-notify')
const minify = require('gulp-minify-css')
const mainBowerFiles = require('main-bower-files')

gulp.task('js', function () {
  return gulp.src(mainBowerFiles())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(notify({ message: 'compress task complete' }))
})

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
})
