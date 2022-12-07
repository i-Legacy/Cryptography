/**
 * publicKey <-----MathematicallyLinked----> privateKey
 * -------------------
 * l                 l
 * l    publicKey    l <---- Everyone can PUSH
 * l                 l
 * l-----------------l
 * l                 l
 * l                 l
 * l                 l
 * l    privatekey   l -----> Only privateKey owner can PUSH
 * l                 l
 * l                 l
 * l-----------------l
 */

const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // length of key in bites
  publicKeyEncoding: {
    type: 'spki', // recommender to be 'spki' by Node.js
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommender to be 'pkcs8' by Node.js
    format: 'pem',
    // cipher: 'aes-256-cbs', // optional security
    // passphrase: 'top secret',
  },
});

// console.log(publicKey);
// console.log(privateKey);
module.exports = {
  privateKey,
  publicKey,
};
