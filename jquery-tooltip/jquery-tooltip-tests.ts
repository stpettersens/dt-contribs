/// <reference path="../node/node.d.ts" />
/// <reference path="../jsdom/jsdom.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery-tooltip.d.ts" />

import fs = require('fs');
import jsdom = require('node-jsdom');
import $ = require('jquery');
$(jsdom.jsdom('<div id="tt"></div>'.parentWindow));

fs.readFile('jquery-tooltip.min.js', 'utf-8', function(err: any, code: string) {
	eval(code);
	console.log($('#tt').tooltip());
}); 


