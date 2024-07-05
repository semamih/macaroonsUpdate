'use strict';

const {src,dest, watch, series} = require("gulp");
const less = require('gulp-less');
const path = require('path');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssnano');
const rename = require('gulp-rename');

exports.less = function () {
    return src('./src/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.watch = function () {
    watch('./src/styles/*.less', series('less'));
};