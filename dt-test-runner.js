var glob = require('glob'),
    exec = require('child_process').exec;
    
console.log('Is this a CI environment? %s', process.env.CI);
console.log('Invoked dt-contribs test runner...');
if(!process.env.CI) {
    console.log('Please run in a CI environment such as Travis.');
    process.exit(1);
}
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
