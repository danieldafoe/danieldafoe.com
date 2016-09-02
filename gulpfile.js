'use strict';
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	config   = require('./config'),
	cssmin   = require('gulp-cssmin'),
	imagemin = require('gulp-imagemin'),
	jade     = require('gulp-jade'),
	rename   = require('gulp-rename'),
	sass     = require('gulp-sass'),
	uglify   = require('gulp-uglifyjs');

// Variables
var srcSass = './app/sass/*.scss',
	srcJade = './app/jade/**/*.jade',
	srcJs   = './app/js/*.js',
	srcImgs = ['./app/res/*.png','./app/res/*.jpg'];

// Compilation tasks
gulp.task('sass', function() {
	return gulp.src(srcSass)
	.pipe(sass())
	.pipe(gulp.dest('./dev/css/'))
	.pipe(browserSync.stream());
});
gulp.task('jade', function(done) {
	return gulp.src(srcJade)
	.pipe(jade(config.jade.settings))
	.pipe(gulp.dest('./'))
	.pipe(gulp.dest('./dev/'))
	.pipe(gulp.dest('./prod/'));
	done();
});
gulp.task('js', function() {
	return gulp.src(srcJs)
	.pipe(gulp.dest('./dev/js/'));
});
gulp.task('images', function() {
	return gulp.src(srcImgs)
	.pipe(gulp.dest('./dev/res/'));
});

// Move tasks
gulp.task('move:css', function() {
	return gulp.src('./app/sass/vendor/**')
	.pipe(gulp.dest('./dev/css/vendor/'))
});
// Move tasks
gulp.task('move:js', function() {
	return gulp.src('./app/js/vendor/**')
	.pipe(gulp.dest('./dev/js/vendor/'))
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

// Reload
gulp.task('reload', function(done) {
	browserSync.reload();
	done();
});
gulp.task('reload:jade', ['jade'], function() {
	browserSync.reload();
});

// Build task
gulp.task('build',['jade', 'sass', 'js', 'move:css', 'move:js']);

// Deploy task
gulp.task('deploy',['min-css', 'min-js', 'min-images']);

// Watch tasks
gulp.task('watch', function() {
	// Start browser sync
	browserSync.init({
		server: './dev/',
		port: 3000,
		notify: false,
		tunnel: true
	});

	gulp.watch(srcSass, ['sass', 'reload']);
	gulp.watch(srcJade, ['reload:jade']);
	gulp.watch(srcJs, ['js', 'reload']);
});

// Default task
gulp.task('default', ['watch']);