// JWT Utility Functions
// Kenapa dipisah? Supaya logic JWT reusable dan mudah di-test

const jwt = require('jsonwebtoken');

/**
 * Generate JWT token
 * @param {Object} payload - Data yang mau di-encode dalam token
 * @returns {String} JWT token
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

/**
 * Verify JWT token
 * @param {String} token - JWT token yang mau di-verify
 * @returns {Object} Decoded payload
 * @throws {Error} Jika token invalid/expired
 */
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};