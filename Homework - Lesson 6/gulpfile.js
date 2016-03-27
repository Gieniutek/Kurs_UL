	var gulp = require('gulp');
    var jshint = require('gulp-jshint');
	var concat = require('gulp-concat');

  gulp.task('concatString', function() {
  gulp.src(['/scr/hello.txt','/scr/world.txt'])
    .pipe(concat('result.txt'))
    .pipe(gulp.dest(''));
});
