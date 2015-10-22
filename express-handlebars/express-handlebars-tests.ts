/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />
/// <reference path="express-handlebars.d.ts" />

import express = require('express');
import exphbs = require('express-handlebars');

var app = express();
var hbs: Exphbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(1337);
console.log('Started dummy server on port 1337...');
console.log('Done');
process.exit(0);
