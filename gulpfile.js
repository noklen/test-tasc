const gulp =require('gulp');
const concat =require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const htmlmin = require('gulp-html-minifier2');

function styles() {
    return gulp.src('./src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'));
}

function script() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'));
}
function html() {
    return gulp.src('./index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/'));

}

function watch() {
    gulp.watch('./src/css/*.scss', styles);
    gulp.watch('./src/js/*.js', script);
    gulp.watch('./index.html', html);

}

function clean() {
   return del(['build/*']);
}

gulp.task(
    'build',
    gulp.series(
        clean,
        gulp.parallel(html, styles, script, watch)
    )
);
