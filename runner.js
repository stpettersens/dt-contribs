var glob = require('glob'),
    exec = require('child_process').exec;

console.log('Invoked dt-contribs test runner...');
glob('*/', function(err, modules) {
    for(var i = 0; i < modules.length; i++) {
	process.chdir(modules[i]);
	exec('npm install', function(err, stdout, stderr) {});
	exec('npm test', function(err, stdout, stderr) {
	   console.log(stdout);
	});
	process.chdir('..');
    }
});
