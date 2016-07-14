var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp
    .src('app.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
})

gulp.task('assets', function () {
    gulp
      .src('assets/images/*')
      .pipe(gulp.dest('public/images'));
})

gulp.task('default', ['styles', 'assets'])
