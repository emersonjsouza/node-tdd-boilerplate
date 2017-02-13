const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

gulp.task('pre-test', ()=> {
    return gulp.src('app/**/*.js')
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    gulp.src('test/**/*.js', { read: false })
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .once('end', () => {
            process.exit();
        })
});