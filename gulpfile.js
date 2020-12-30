var gulp = require('gulp'),        
    uglify = require('gulp-uglify'),    
    concat = require('gulp-concat'),
    notify=require('gulp-notify');
var mainBowerFiles = require('main-bower-files');
    
gulp.task('compress', function() {
    return gulp.src(mainBowerFiles())
        .pipe( uglify() )
        .pipe( concat('main.js') )
        .pipe( gulp.dest('./dist') )
        .pipe( notify({ message: 'compress task complete' })  )
});