/*
Generate type definitions and tests for change-case module
from its constituent modules.
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
     rel = require('gulp-remove-empty-lines'),
  insert = require('gulp-insert'),
 replace = require('gulp-replace');

var header = '// Type definitions for change-case\r\n' +
'// Project: https://github.com/blakeembrey/change-case\r\n' +
'// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>\r\n' +
'// Definitions: https://github.com/borisyankov/DefinitelyTyped\r\n\n' +
'declare module "change-case" {\r\n';

var footer = '}';

var test_header = '/// <require path="change-case.d.ts" />\r\n\r\n' +
'import changeCase = require(\'change-case\');\r\n';

gulp.task('definitions', function() {
    return gulp.src([
      	'../is-upper-case/is-upper-case.d.ts',
      	'../is-lower-case/is-lower-case.d.ts',
      	'../upper-case/upper-case.d.ts',
      	'../upper-case-first/upper-case-first.d.ts',
      	'../lower-case-first/lower-case-first.d.ts',
      	'../lower-case/lower-case.d.ts',
      	'../sentence-case/sentence-case.d.ts',
      	'../title-case/title-case.d.ts',
      	'../camel-case/camel-case.d.ts',
      	'../pascal-case/pascal-case.d.ts',
      	'../snake-case/snake-case.d.ts',
      	'../param-case/param-case.d.ts',
      	'../dot-case/dot-case.d.ts',
      	'../path-case/path-case.d.ts',
      	'../constant-case/constant-case.d.ts',
      	'../swap-case/swap-case.d.ts',
      	'shorthands.txt'
    ])
    .pipe(concat('change-case.d.ts'))
    .pipe(replace(/\/{2}.*\r*\n*/g, '')) // Strip out comments.
    .pipe(replace(/declare module .*/g, '')) // Strip out declarations.
    .pipe(replace(/\}/g, '')) // Strip out end of declarations.
    .pipe(replace(/export = .*/g, '')) // Strip out exports.
    .pipe(replace(/(function)/g, 'export $1')) // Export *each* function.
    .pipe(rel()) // Remove empty lines.
    .pipe(insert.prepend(header)) // Append header and new declaration.
    .pipe(insert.append(footer)) // Append new end of declaration.
    .pipe(gulp.dest('.'));
});

gulp.task('tests', function() {
     return gulp.src([
        '../is-upper-case/is-upper-case-tests.ts',
        '../is-lower-case/is-lower-case-tests.ts',
        '../upper-case/upper-case-tests.ts',
        '../upper-case-first/upper-case-first-tests.ts',
        '../lower-case-first/lower-case-first-tests.ts',
        '../lower-case/lower-case-tests.ts',
        '../sentence-case/sentence-case-tests.ts',
        '../title-case/title-case-tests.ts',
        '../camel-case/camel-case-tests.ts',
        '../pascal-case/pascal-case-tests.ts',
        '../snake-case/snake-case-tests.ts',
        '../param-case/param-case-tests.ts',
        '../dot-case/dot-case-tests.ts',
        '../path-case/path-case-tests.ts',
        '../constant-case/constant-case-tests.ts',
        '../swap-case/swap-case-tests.ts'
    ])
    .pipe(concat('change-case-tests.ts'))
    .pipe(rel())
    .pipe(replace(/\/{2,3}.*/g, ''))
    .pipe(replace(/import .*/g, ''))
    .pipe(replace(/(console.log\()/g, '$1changeCase.'))
    .pipe(insert.prepend(test_header))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['definitions', 'tests'], function(){});
