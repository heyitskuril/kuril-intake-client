// Authentication Middleware
// Kenapa dipisah? Supaya bisa protect route manapun dengan mudah

const { verifyToken } = require('../utils/jwt');
const prisma = require('../db/prisma');

/**
 * Protect Route - Hanya admin yang bisa akses
 * Middleware ini check JWT token di header Authorization
 */
const protect = async (req, res, next) => {
  try {
    // 1. Check apakah ada token di header
    let token;
    
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized. No token provided.',
      });
    }

    // 2. Verify token
    const decoded = verifyToken(token);

    // 3. Check apakah user masih exist di database
    const user = await prisma.adminUser.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User no longer exists.',
      });
    }

    // 4. Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized. Invalid token.',
      error: error.message,
    });
  }
};

module.exports = { protect };