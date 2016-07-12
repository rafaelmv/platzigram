var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp
    .src('app.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'));
})

gulp.task('default', ['styles'])
