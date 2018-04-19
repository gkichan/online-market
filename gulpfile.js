//Init Gulp
const gulp = require('gulp');
//Init Gulp-Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//Init Gulp-Concat
const concat = require('gulp-concat');
//Init sprite-smith
const spritesmith = require('gulp.spritesmith');
//Init merge-stream
const merge = require('merge-stream');

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
// Generate sprite Settings
gulp.task('sprite',function () {
    // Generate our spritesheet
    let spriteData = gulp.src('source/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
    }));
    // Pipe image stream through image optimizer and onto disk
    let imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));
    // Pipe CSS stream through CSS optimizer and onto disk
    let cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/css/components/'));
    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
});

//Create watch task
gulp.task('watch', ['autoprefixer', 'concat-css'], function() {
    gulp.watch('source/css/**/*.css', ['autoprefixer']); //Отслеживаем изменения в исходных стилях и выполняем autoprefixer
    gulp.watch('app/css/**/*.css', ['concat-css']); //Отслеживаем изменения в готовых стилях и выполняем concat
});

//Set watch task as default task
gulp.task('default', ['watch']);