/// <reference path="../node/node.d.ts" />
/// <reference path="../glob/glob.d.ts" />
/// <reference path="node-7z.d.ts" />

import fs = require('fs');
import glob = require('glob');
import z7 = require('node-7z');

var z7a: any = new z7();
z7a.add('tds.7z', ['node-7z.d.ts', 'node-7z-tests.ts']);
glob('*.7z', {debug: false}, function(err: any, files: string[]) {
	console.log('7z archive created:');
	console.log(files[0]);
});
fs.unlinkSync('tds.7z');
