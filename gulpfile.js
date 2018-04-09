const gulp = require('gulp'); // init Gulp
const autoprefixer = require('gulp-autoprefixer'); // init Gulp-autoprefixer
const concat = require('gulp-concat'); // Init Gulp concat

// Autoprefixer
gulp.task('autoprefixer',function () {
  gulp.src('source/css/**/*.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('app/css'))
});

// Concat all css files
gulp.task('concat-css', function () {
  gulp.src([
      'app/css/fonts.css',
      'app/css/reset.css',
      'app/css/components/*.css',
      'app/css/pages/*.css'
  ])
      .pipe(concat('style.css'))
      .pipe(gulp.dest('app/css'))
});

// Watch
gulp.task('watch',['autoprefixer','concat-css'],function () {
  gulp.watch('source/css/**/*.css',['autoprefixer']); // watch style directory and run task 'autoprefixer'
  gulp.watch('app/css/**/*.css', ['concat-css']); // watch and run concat-css
});

// Default task
gulp.task('default',['watch']);