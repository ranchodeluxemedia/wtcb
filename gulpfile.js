var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(gulp.dest('./css/'))
      .pipe(minifyCss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'], function() {
  // Love your code, motherfucker...
});