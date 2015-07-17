/// <reference path="../node/node.d.ts" />
/// <reference path="magic-number.d.ts" />

import fs = require('fs');
import magic = require('magic-number');

var buffer = new Buffer(100);
buffer.write('7z', 'binary');
fs.writeFileSync('test.7z', buffer);
var mimetype: string = magic.detectFile('test.7z');
console.log(mimetype); // => 'application/7z-x-compressed'
fs.unlinkSync('test.7z');


