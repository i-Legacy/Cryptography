// Add salt to the hash
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

// When the user signs up, it will generate a salt
function signup(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64).toString('hex');

  // Store salt in the database, by prepending to the existing string
  const user = { email, password: `${salt}:${hashedPassword}` };
  users.push(user);

  return user;
}

// Grab salt and recreate original hash
function login(email, password) {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(':');
  const hashedBuffer = scryptSync(password, salt, 64);

  // prevent timing attacks
  const keyBuffer = Buffer.from(key, 'hex');
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (!match) {
    return 'Invalid password';
  } else {
    return 'login successful';
  }
}

const users = [];

const user = signup('foo@bar.com', 'pa$$word');

console.log(user);

const result = login('foo@bar.com', 'password');

console.log(result);
