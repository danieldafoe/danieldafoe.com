'use strict';
var gulp = require('gulp'),
		sass     = require('gulp-sass'),
		jade     = require('gulp-jade'),
		cssmin   = require('gulp-cssmin'),
		rename   = require('gulp-rename'),
		uglify   = require('gulp-uglifyjs'),
		imagemin = require('gulp-imagemin'),
		config   = require('./config');

// Variables
var srcSass = './app/sass/*.scss',
	srcJade = './app/jade/*.jade',
	srcJs   = './app/js/*.js',
	srcImgs = ['./app/res/*.png','./app/res/*.jpg'];

// Compilation tasks
gulp.task('sass', function() {
	return gulp.src(srcSass)
	.pipe(sass())
	.pipe(gulp.dest('./dev/css/'));
});
gulp.task('jade', function() {
	return gulp.src(srcJade)
	.pipe(jade(config.jade.settings))
	.pipe(gulp.dest('./dev/'))
	.pipe(gulp.dest('./prod/'));
});
gulp.task('images', function() {
	return gulp.src(srcImgs)
	.pipe(gulp.dest('./dev/res/'));
});

// Minify tasks
gulp.task('min-css', function() {
	return gulp.src('./dev/css/*.css')
	.pipe(cssmin())
	//.pipe(rename(config.rename.settings))
	.pipe(gulp.dest('./prod/css/'));
});
gulp.task('min-js', function() {
	return gulp.src(srcJs)
	.pipe(uglify())
	//.pipe(rename(config.rename.settings))
	.pipe(gulp.dest('./prod/js/'));
});
gulp.task('min-images', function() {
	return gulp.src(srcImgs)
	.pipe(imagemin(config.imagemin.settings))
	.pipe(gulp.dest('./prod/res/'));
});

// Build task
gulp.task('build',['min-css', 'min-js', 'min-images']);

// Watch tasks
gulp.task('watch', function() {
	gulp.watch(srcSass, ['sass']);
	gulp.watch(srcJade, ['jade']);
});

// Default task
gulp.task('default', ['watch']);