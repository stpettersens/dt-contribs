#!/usr/bin/env node
var glob = require('glob'),
   _exec = require('child_process').exec;

console.log('Is this a CI environment? %s', process.env.CI);
console.log('Invoked dt-contribs test runner...');
if(!process.env.CI) {
    console.log('Please run in a CI environment such as Travis.');
    process.exit(1);
}
glob('*/', function(err, modules) {
    modules.map(function(_module) {
    	process.chdir(_module);
    	var files = glob.sync('*.json');
        if(files.indexOf('bower.json') != -1) {
            _exec('bower install', function() {});
        }
        if(files.indexOf('package.json') != -1) {
            _exec('npm install', function() {});
            _exec('npm test', function(err, stdout, stderr) {
                console.log(stdout);
                if(stderr.length > 0) {
                    console.log('AN ERROR OCCURRED! (҂⌣̀_⌣́)');
                    console.log(stderr);
                    //process.exit(1);
                }
            });
        }
        process.chdir('..');
    });
});
