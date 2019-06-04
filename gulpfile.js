const gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create()

const paths = {
    styles: {
        src: "src/styles/*.scss",
        dest: "dist/css"
    },

    scripts: {
        src: "src/scripts/*.js",
        dest: "dist/js"
    },

    markup: {
        src: "src/*.html",
        dest: "dist"
    }
}

function markup() {
    return gulp
        .src(paths.markup.src)
        .pipe(gulp.dest(paths.markup.dest))
} 

function script() {
    return gulp
        .src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(bs.stream())
}

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream())
}

function build() {
    return new Promise((resolve) => {
        style()
        script()
        markup()
        resolve()
    })
}

function serve() {
    bs.init({
        server: {
            baseDir: "dist"
        }
    })

    gulp.watch(paths.styles.src, style)
    gulp.watch(paths.scripts.src, script)
    gulp.watch(paths.markup.src, markup).on("change", bs.reload)
}

gulp.task("serve", gulp.series(build, serve))
gulp.task("build", build)