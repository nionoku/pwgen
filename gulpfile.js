const gulp = require('gulp'),
    scss = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create()

const paths = {
    assets: {
        src: "src/assets/**/*.*",
        dest: "dist/assets"
    },

    styles: {
        src: "src/styles/**/*.scss",
        dest: "dist/css"
    },

    scripts: {
        src: "src/scripts/**/*.js",
        dest: "dist/js"
    },

    pages: {
        src: "src/pages/*.html",
        dest: "dist/pages"
    },

    index: {
        src: "src/*.html",
        dest: "dist"
    }
}

function makePages() {
    return gulp
        .src(paths.pages.src)
        .pipe(gulp.dest(paths.pages.dest))
}

function makeIndexPage() {
    return gulp
        .src(paths.index.src)
        .pipe(gulp.dest(paths.index.dest))
}

function makeAssets() {
    return gulp
        .src(paths.assets.src)
        .pipe(gulp.dest(paths.assets.dest))
}

function makeScript() {
    return gulp
        .src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(bs.stream())
}

function makeStyle() {
    return gulp
        .src(paths.styles.src)
        .pipe(scss())
        .pipe(prefixer())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream())
}

function build(done) {
    makeStyle()
    makeScript()
    makeAssets()
    makePages()
    makeIndexPage()

    done()
}

function reloadServer(done) {
    if (bs.active)
        bs.reload()

    done()
}

function serve(done) {
    bs.init({
        server: {
            baseDir: "dist"
        }
    })

    // watch assets
    gulp.watch(paths.assets.src, makeAssets)
    // watch styles
    gulp.watch(paths.styles.src, makeStyle)
    // watch scripts
    gulp.watch(paths.scripts.src, makeScript)
    // watch pages
    gulp.watch(paths.pages.src, gulp.series(makePages, reloadServer))
    // watch index
    gulp.watch(paths.index.src, gulp.series(makeIndexPage, reloadServer))

    done()
}

// --- tasks ---
gulp.task("serve", gulp.series(build, serve))
gulp.task("build", build)
// --- tasks ---