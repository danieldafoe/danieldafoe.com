const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Sass
gulp.task('sass:compile', () => {
  gulp.src('sass/**/*')
   .pipe(sass())
   .pipe(clean())
   .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('sass/*', ['sass:compile'])
});

// BrowserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('sass/*', ['sass:compile']).on('change', browserSync.reload);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);