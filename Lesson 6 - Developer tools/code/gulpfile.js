	var gulp = require('gulp');
	var concat = require('gulp-concat');

  gulp.task('concatSrc', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('calc.js'))
    .pipe(gulp.dest('./build/'));
});
