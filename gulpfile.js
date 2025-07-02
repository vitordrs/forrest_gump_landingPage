const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const paths = {
    scss: {
        src: 'src/*.scss',
        dest: 'dist/'
    },
    js:{
        src:'src/*.js',
        dest:'dist/'
    }
};

function compilarSass() {
    return gulp.src(paths.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.scss.dest));
}
function compressJS(){
    return gulp.src('src/*.js')
        .pipe(babel({
            presets:['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
}

function watch() {
    console.log('watching:', paths.scss.src);  // para debug
    gulp.watch(paths.scss.src, compilarSass);
    gulp.watch(paths.js.src, compressJS);
}


exports.default = gulp.series(
    compilarSass,
    compressJS,
    watch
);
