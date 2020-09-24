var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var watch = require('gulp-watch-less');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');



gulp.task('compile-less', function () {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./css'));
});

gulp.task('compile-stylus', function () {
    gulp.src('./stylus/**/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./css'));
});

gulp.task('compile-sass', function () {
    gulp.src('./node_modules/bootstrap/scss/*.scss')
        .pipe(sass())
        .pipe(concat('bootstrap.css'))
        .pipe(gulp.dest('./css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch-less', function() {
    gulp.watch('less/**/*.less' , ['compile-less']);
});

gulp.task('watch-stylus', function() {
    gulp.watch('stylus/**/*.styl' , ['compile-stylus']);
});



gulp.task('watch-sass', function() {
    gulp.watch('./node_modules/bootstrap/scss/*.scss' , ['compile-sass']);
});

gulp.task('default', ['compile-less', 'watch-less', 'compile-sass', 'compile-stylus', 'watch-stylus', 'compile-sass', 'watch-sass']);


