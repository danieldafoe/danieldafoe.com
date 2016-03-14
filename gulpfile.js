'use strict';
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jade = require('gulp-jade'),
		config = require('./config');

// Variables
var srcSass = './sass/*.scss',
		srcJade = './jade/*.jade';

gulp.task('sass', function() {
		return gulp.src(srcSass)
		.pipe(sass())
		.pipe(gulp.dest('./css/'));
});
gulp.task('jade', function() {
		return gulp.src(srcJade)
		.pipe(jade(config.jade.settings))
		.pipe(gulp.dest('./'));
});

// Watch files
gulp.task('watch', function() {
	gulp.watch(srcSass, ['sass']);
	gulp.watch(srcJade, ['jade']);
});

// Commence watching
gulp.task('default', ['watch']);