/// <reference path="../glob/glob.d.ts" />
/// <reference path="node-7z.d.ts" />

import glob = require('glob');
import z7 = require('node-7z');

var z7a: any = new z7();
z7a.add('tds.7z', ['node-7z.d.ts', 'node-7z-tests.ts']);
var files: string[] = glob.sync('*.7z');
console.log('7z archive created:');
console.log(files[0]);
