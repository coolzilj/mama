var http  = require('http');
var qs    = require('querystring');
var spawn = require('child_process').spawn;

var server = http.createServer(function(req, res) {

  switch(req.url) {
    case '/play':

    if (req.method == 'POST') {
      var body = '';

      req.on('data', function(chunk) {
        body += chunk;
      });

      req.on('end', function() {
        var data = qs.parse(body);
        console.log(data.url);
        var play = spawn('/usr/local/bin/you-get', ['--debug', '-p', '/usr/local/bin/mpv', data.url]);

        play.stdout.on('data', function(data) {
          console.log('stdout: ' + data);
          res.writeHead(200, 'OK', {'Content-Type': 'text/html'});
          res.end();
        });

        play.stderr.on('data', function(data) {
          console.log('stderr: ' + data);
        });

        play.on('close', function(code) {
          console.log('child process exited with code ' + code);
          if (code !== 0) {
            res.writeHead(500, 'Something wrong', {'Content-Type': 'text/html'});
            res.end();
          }
        });

        play.on('error', (err) => {
          console.log('Failed to start child process.');
          res.writeHead(500, 'Something wrong', {'Content-Type': 'text/html'});
          res.end();
        });

      });
    };
    break;
  }
});

console.log('Listening on port 1234');
server.listen('1234');