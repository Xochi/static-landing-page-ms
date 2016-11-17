var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minify = require('gulp-uglify');

gulp.task('sass', function(){
	return gulp.src('src/main.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function(){
	browserSync.init({
		server:{
			baseDir: 'dist'
		}
	});
});

gulp.task('scripts', function(){
	return gulp.src('src/*.js')
		// .pipe(minify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserSync', 'scripts'], function(){
	gulp.watch('src/main.js', ['scripts']);
	gulp.watch('src/main.scss', ['sass']);	
	gulp.watch('dist/index.html').on('change', browserSync.reload);
});