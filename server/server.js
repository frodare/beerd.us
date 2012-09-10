// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
  Creationix.log(),
  require('wheat')(process.env.JOYENT ? process.env.HOME + "/beerd.us" : __dirname +"/..")
)).listen(8010);
