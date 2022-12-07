/**
 * With normal Hashed Authentication Code
 * Message1 --HashFunc--> Hash1
 * Message2 --HashFunc--> Hash2
 *
 * With hmac
 * Message1 + correctPassword --HashFunc--> Hash1
 * Message1 + incorrectPassword --HashFunc--> incorrectHash
 * Message2 + correctPassword --HashFunc--> Hash2
 */

/**
 * SYMMETRIC ENCRYPTION
 * message --Encrypt--> hash --Decrypt--> message
 *              |                    |
 *              -----Shared Key-------
 *
 * Randomized -> Different hash even if key and message are the same
 * Symmetric -> Shared password that both sender and receiver must have
 */

// iv: initial vector
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const message = 'message';
console.log('message: ' + JSON.stringify(message));
const key = randomBytes(32);

// prevents identical sequences of text producing same hash
const iv = randomBytes(16);

// create the cipher
const cipher = createCipheriv('aes256', key, iv);

// Encrypt - ciper.final('hex') cipher can no longer be used to encrypt data
const encryptedMessage =
  cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8');
console.log(`deciphered: ${decryptedMessage.toString('utf8')}`);

// LIMITATION: Both sender and receiver need to have a shared password
