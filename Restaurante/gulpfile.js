const gulp = require('gulp');
const babel = require('gulp-babel');
const zip = require('gulp-zip');

gulp.task('default', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist')),
    gulp.src('dist/**/*')
        .pipe(zip('artifact.zip'))
        .pipe(gulp.dest('./'))
);