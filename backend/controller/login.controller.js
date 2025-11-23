const { authentication } = require("./../util/auth");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { user } = require("../models/indes");

async function login(username, password) {

  const dbUser = await user.findOne({ where: { email: username } });
  if (!dbUser) {
    console.log('ERROR: Could not log in user - user not found');
    return false;
  }
  const passwordMatch = await bcrypt.compare(password, dbUser.password);
  if (!passwordMatch) {
    console.log('ERROR: Could not log in user - incorrect password');
    return false;
  }
  const token = jwt.sign({ username: dbUser.username }, 'hjdfghsgfhjgshjgfhjsghjfghjsgf', { expiresIn: '1h' });
  return { user: dbUser, token: token };



}

async function register(userData) {
  try {
    const { username, password, email } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;
    const newUser = await user.create(userData);
      const token = jwt.sign({ username: newUser.username }, 'hjdfghsgfhjgshjgfhjsghjfghjsgf', { expiresIn: '1h' });
      return { user: newUser, token: token };
  } catch (error) {
    console.log('ERROR: Could not register user - ', error);
    return false;
    
  }
}

module.exports = {
  login,
  register
};
