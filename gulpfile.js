const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});
