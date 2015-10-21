/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="express-handlebars.d.ts" />

import express = require('express');
import exphbs = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(1337);
console.log('Started dummy server on port 1337...');
console.log('Done');
process.exit(0);