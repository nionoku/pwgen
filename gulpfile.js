const gulp = require('gulp'),
    scss = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create()

const srcDir = "src",
    distDir = "dist";

const paths = {
    assets: {
        src: `${srcDir}/assets/**/*.*`,
        dest: `${distDir}/assets`
    },

    styles: {
        src: `${srcDir}/styles/**/*.scss`,
        dest: `${distDir}/css`
    },

    scripts: {
        src: `${srcDir}/scripts/**/*.js`,
        dest: `${distDir}/js`
    },

    pages: {
        src: `${srcDir}/pages/*.html`,
        dest: `${distDir}/pages`
    },

    index: {
        src: `${srcDir}/*`,
        dest: `${distDir}`
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
            baseDir: distDir
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
