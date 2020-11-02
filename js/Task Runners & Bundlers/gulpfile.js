const { dest, src } = require('gulp');
const babel = require('gulp-babel');

exports.build = function() {
    return src('src/*.js')
        .pipe(babel())
        .pipe(dest('output/'));
}

exports.default = function() {
    return src('src/*.js')
        .pipe(babel())
        .pipe(dest('output/'));
}