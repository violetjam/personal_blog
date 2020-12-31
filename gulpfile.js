var gulp = require('gulp'),        
    uglify = require('gulp-uglify'),    
    concat = require('gulp-concat'),
    notify=require('gulp-notify'),
    minify = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
    
gulp.task('js', function() {
    return gulp.src(mainBowerFiles())
        .pipe( uglify() )
        .pipe( concat('main.js') )
        .pipe( gulp.dest('./dist') )
        .pipe( notify({ message: 'compress task complete' })  )
});

gulp.task('css',function(){
    return gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
})
