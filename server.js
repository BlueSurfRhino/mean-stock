//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var async = require('async');
var socketio = require('socket.io');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require("ejs").renderFile);
app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, 'client')));

/*
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(app.router);
});
*/



app.get('/', function(req, res) {
  res.render('index', { title: 'Home Page.  ' });
});

app.get('/walmart',  function(req, res) {
  res.render('walmart', { title: 'Walmart  ' });
});

app.configure('development', function () {
    app.use(express.errorHandler());
});
var messages = [];
var sockets = [];

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening for foobar at: ", addr.address + ":" + addr.port);
});

/*
server.listen(app.get('port'), function () {
    console.log("Express server for Rich listening on port " + app.get('port'));
});
*/
