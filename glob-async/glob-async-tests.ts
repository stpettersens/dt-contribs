/// <reference path="glob-async.d.ts" />

import glob = require('glob');

glob('*.ts', {debug: false}, function(err: any, files: string[]) {
    console.log(files);
});
