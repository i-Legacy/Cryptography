// Import Hash functions from node crypto library
// Builty-in module in node js
const { createHash, Hash, timingSafeEqual } = require('crypto');

function hash(input) {
  // Digest == output in format hexadesimal
  return createHash('sha256', input).update(input).digest('hex');
}
const message = 'message';
console.log('Message: ' + message);
console.log('Hash: ' + hash('message'));
