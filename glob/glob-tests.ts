/// <reference path="glob.d.ts" />

import glob = require('glob');

var files: string[] = glob.sync('*.ts', {debug: false});
console.log(files);

