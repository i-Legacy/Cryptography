/**
 * message -----encrypt---- hash ----decrypt---- message
 *           l                                l
 *           l                                l
 *        publicKey                        privateKey
 */

const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keyPair');

const message = 'message';

const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from(message) // only the owner can read it
);

console.log(encryptedData.toString('hex'));

// Unlock Mailbox
const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('hex'));
