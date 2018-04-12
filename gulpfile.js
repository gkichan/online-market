//Init Gulp
const gulp = require('gulp');
//Init Gulp-Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//Init Gulp-Concat
const concat = require('gulp-concat');

//Autoprefixer Settings
gulp.task('autoprefixer', function() {
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest('app/css/'))
});

//Concat Settings
gulp.task('concat-css', function() {
    gulp.src([
            'app/css/fonts.css', 
            'app/css/reset.css', 
            'app/css/components/*.css', 
            'app/css/pages/*.css'
        ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css/'))
});

//Create watch task
gulp.task('watch', ['autoprefixer', 'concat-css'], function() {
    gulp.watch('source/css/**/*.css', ['autoprefixer']); //Отслеживаем изменения в исходных стилях и выполняем autoprefixer
    gulp.watch('app/css/**/*.css', ['concat-css']); //Отслеживаем изменения в готовых стилях и выполняем concat
});

//Set watch task as default task
gulp.task('default', ['watch']);