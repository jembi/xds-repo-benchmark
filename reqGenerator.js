var fs = require('fs');
var uuid = require('uuid');

var filesInDir = fs.readdirSync('.');
var bodies = [];
for (var i = 0; i < filesInDir.length; i++) {
  if (filesInDir[i].indexOf('pnr-') == 0) {
    bodies.push(fs.readFileSync(filesInDir[i]).toString());
  }
}

console.log('Found ' + bodies.length + ' different documents to post...');

module.exports = function(requestId) {
  var randIndex = Math.floor(Math.random() * bodies.length);
  var body = bodies[randIndex];

  body = body.replace(/#{{docUniqueId}}/g, '1.25.' + uuid.v4());
  body = body.replace(/#{{subUniqueId}}/g, '1.25.' + uuid.v4());

  return body;
};