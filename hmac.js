// HMAC ==> Hashed-Based Message Authentication Code
/**
 * Hash that ALSO requires a password that links the password to the hash
 * To create a corresponding hash signature, you must have the corresponding
 * password or key
 */
const { createHmac } = require('crypto');

const key = 'secretKey';
const message = 'rightMessage';
const message2 = 'wrongMessage';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log('Hash of ' + message);
console.log(hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message2).digest('hex');

console.log('Hash of ' + message2);
console.log(hmac2);
