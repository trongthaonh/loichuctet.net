'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import browserSync from 'browser-sync';

gulp.task('vendors', function() {

  return gulp.src(config.vendors.src)
      .pipe(changed(config.vendors.dest)) // Ignore unchanged files
      .pipe(gulp.dest(config.vendors.dest))
      .pipe(browserSync.stream());

});
