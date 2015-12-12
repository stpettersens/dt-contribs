/// <reference path="ua-parser-js.d.ts" />

import UAParser = require('ua-parser-js');

var ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) '
+ ' Chrome/45.0.2454.99 Safari/537.36 Vivaldi/1.0.303.52';

var parser = new UAParser();
var val = parser.setUA(ua);

console.log(val.getBrowser().name);   // => "Vivaldi"
console.log(val.getBrowser().version) // => 1.0.303.52

console.log(val.getOS().name)    // => "Windows"
console.log(val.getOS().version) // => 7
