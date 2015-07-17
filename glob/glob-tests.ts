/// <reference path="glob.d.ts" />

import glob = require('glob');

glob('*.ts', {debug: false}, function(err: any, files: string[]) {
	console.log('glob is matching:');
	for(var i: number = 0; i < files.length; i++) {
		console.log(files[i]);
	}
});

