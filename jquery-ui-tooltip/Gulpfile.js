var gulp = require('gulp'),
	 tsc = require('gulp-typescript');

gulp.task('default', function() {
	return gulp.src('jquery-ui-tooltip-tests.ts')
	.pipe(tsc({
		noImplicitAny: true,
		module: 'commonjs'
	}))
	.pipe(gulp.dest('.'));
});
