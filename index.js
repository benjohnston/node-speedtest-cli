var PythonShell = require('python-shell'),
  argv = require('optimist').boolean(['r', 'repeat']).argv,
  colors = require('colors');

var repeat = argv.r || argv.repeat || false;
var interval = argv.i || argv.interval || 60*60; // Default 1 hour

var w = function(s) {
  process.stdout.write(s);
};

function runSpeedTest() {
  w('\n');
  w('Starting test');
  w('\n');
  w(new Date().toString().blue);
  PythonShell.run('speedtest-cli.py', {
    args: ['--simple'],
    scriptPath: 'lib'
  }, function (err, results) {
    if (err) w('\n' + err.red + '\n');

    w('\n\n');
    w('Test successful'.green);
    w('\n');
    w(new Date().toString().blue);


    w('\n');
    w(results[0].cyan);
    w('\n');
    w(results[1].cyan);
    w('\n');
    w(results[2].cyan);
    w('\n');
  });
};

exports.run = function() {
  w('\nStarting speed test.');
  
  runSpeedTest();
  
  if (repeat) {
    setInterval(runSpeedTest, interval * 1000);
  }
};