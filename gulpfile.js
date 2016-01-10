var gulp = require("gulp");
var webpack = require("webpack");
var gutil     = require('gulp-util');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var webpackConfig = require('./webpack.config.js');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var cssminify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

// process.env.NODE_ENV  product or dev

gulp.task('clean', function(){
    return gulp.src('build/', {read: false})
        .pipe(clean());
});

gulp.task('cleanCss', function (argument) {
  return gulp.src('css/styles.min.css', {read: false})
        .pipe(clean());
})

gulp.task("styles", ['cleanCss'], function(){
  gulp.src("css/*.css")
    .pipe(concat("styles.css"))
    .pipe(rename({suffix: '.min'}))
    // .pipe(cssminify())
    .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles task complete' }));
  // gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
  //     .pipe(gulp.dest('css/lib'))
  gulp.src('./node_modules/amazeui/dist/css/amazeui.min.css')
      .pipe(gulp.dest('css/lib'))
});

gulp.task('copy', function() {
  return gulp.src('node_modules/amazeui/dist/fonts/*.*')
              .pipe(gulp.dest('css/fonts'))
})

// gulp.task('usemin', function () {
//   return gulp.src('index.html')
//       .pipe(usemin({
//         assetsDir: '',
//         css: [cssminify(), 'concat']
//       }))
//       .pipe(gulp.dest(''));
// });

gulp.task('webpack', function(){
	webpack(webpackConfig, function(err, stats){
		if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
    }));
	})
});

gulp.task('compress', function() {
    gulp.src('build/*.js')
  .pipe(gzip())
  .pipe(gulp.dest('build/'));
});

gulp.task("connect", function(){
  connect.server({
      port: 8000,
      livereload: true
    });
})

//watch fixed later
gulp.task("watch", function(){
  livereload.listen();
  gulp.watch('index.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('components/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('actions/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('constants/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('reducers/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('store/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('containers/**/*.js', ['webpack']).on('change', livereload.changed);
  gulp.watch('css/*.css', ['styles']).on('change', livereload.changed);
});

gulp.task('default',['clean', 'webpack', 'styles', 'copy'], function () {
  gulp.start(['connect', 'watch']);
});

gulp.task('dev',['clean', 'styles', 'copy', 'webpack'], function () {
  gulp.start(['watch']);
  // gulp.start(['connect', 'watch']);
});
