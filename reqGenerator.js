var fs = require('fs');
var uuid = require('uuid');

module.exports = function(requestId) {
  var body = fs.readFileSync('pnr-minumalIC.xml').toString();

  body = body.replace(/#{{docUniqueId}}/g, '1.25.' + uuid.v4());
  body = body.replace(/#{{subUniqueId}}/g, '1.25.' + uuid.v4());

  return body;
};