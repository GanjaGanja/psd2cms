// Include Gulp and all required plugins

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');

var sourcePath = 'src/custom';
var targetPath = 'www/css';

// Create gulp task named 'less' that
// will take 'custom.less' file from 'sourcePath' folder, 
// compress it,
// add browser specific prefixes,
// minify it,
// save result CSS file into 'targetPath' folder

// временно исключил: .pipe(minifyCSS({keepBreaks: false}))
// и отключил компрессию less файлов

gulp.task('less', function () {
  return gulp.src([sourcePath + '/custom.less'])
    .pipe(less({compress: false}).on('error', gutil.log))
    .pipe(autoprefixer('last 10 versions', 'ie 7'))
    
    .pipe(gulp.dest(targetPath));
});

// automate the task
gulp.task('watch', function() {
  gulp.watch('src/custom/*.less', ['less']);
});