const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

const paths = {
    scss: {
        src: 'src/*.scss',
        dest: 'dist/'
    }
};

function compilarSass() {
    return gulp.src(paths.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.scss.dest));
}

function watch() {
    console.log('watching:', paths.scss.src);  // para debug
    gulp.watch(paths.scss.src, compilarSass);
}

exports.default = gulp.series(
    compilarSass,
    watch
);
