// Include gulp
var gulp = require('gulp');
// Include Our Plugins
var sass = require('gulp-sass');
//Main Task
gulp.task('main',function(){
	return gulp.src('sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('bs',function(){
	return gulp.src('sass/bootstrap.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});
