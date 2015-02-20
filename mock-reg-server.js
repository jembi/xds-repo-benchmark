#!/usr/bin/env node
var http = require('http');
var fs = require('fs');

var HOST = '0.0.0.0'
var PORT = '8282'

var cannedResponse = fs.readFileSync("reg-success.xml");

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Length': cannedResponse.length,
    'Content-Type': 'Multipart/Related; start-info="application/soap+xml"; type="application/xop+xml"; boundary="----=_Part_19_1304527513.1422556792807";charset=UTF-8' });
  res.end(cannedResponse);
}).listen(PORT, HOST, function() {
  console.log('Mock registry server listenting on ' + HOST + ', port ' + PORT);
});