const gulp             = require('gulp');
const sourcemaps       = require('gulp-sourcemaps');
const uglify           = require('gulp-uglify');
const rollup           = require('@rollup/stream');
const rollupSourcemaps = require('rollup-plugin-sourcemaps');
const rollupBabel      = require('@rollup/plugin-babel');
const buffer           = require("vinyl-buffer");
const source           = require('vinyl-source-stream');

var conf = {
    dist: "./dist",
    js: {
        fileMin: 'coreui-info.min.js',
        file: 'coreui-info.js',
        main: 'src/js/main.js',
        src: 'src/js/**/*.js'
    }
};

gulp.task('build_js', function() {
    return rollup({
        input: conf.js.main,
        output: {
            sourcemap: false,
            format: 'umd',
            name: "CoreUI.info"
        },
        context: "window",
        plugins: [
            rollupBabel({babelHelpers: 'bundled'}),
        ]
    })
        .pipe(source(conf.js.file))
        .pipe(buffer())
        .pipe(gulp.dest(conf.dist));
});

gulp.task('build_js_min_fast', function() {
    return rollup({
        input: conf.js.main,
        output: {
            sourcemap: false,
            format: 'umd',
            name: "CoreUI.info"
        },
        context: "window",
        plugins: [
            rollupSourcemaps(),
            rollupBabel({babelHelpers: 'bundled'}),
        ]
    })
        .pipe(source(conf.js.fileMin))
        .pipe(buffer())
        .pipe(gulp.dest(conf.dist));
});


gulp.task('build_js_min', function() {
    return rollup({
        input: conf.js.main,
        output: {
            sourcemap: false,
            format: 'umd',
            name: "CoreUI.info"
        },
        context: "window",
        plugins: [
            rollupSourcemaps(),
            rollupBabel({babelHelpers: 'bundled'}),
        ]
    })
        .pipe(source(conf.js.fileMin))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('build_watch', function() {
    gulp.watch(conf.js.src, gulp.parallel(['build_js_fast']));
});

gulp.task("default", gulp.series(['build_js']));