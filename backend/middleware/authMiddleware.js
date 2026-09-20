const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'sarathi_placement_jwt_secret_key_2026_dev';

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'Not authorized, token missing' });
            }

            // Verify token signature and expiration
            const decoded = jwt.verify(token, JWT_SECRET);

            // Attach user document (excluding password hash) to request
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user no longer exists' });
            }

            next();
        } catch (error) {
            console.error('Auth verification error:', error.message);
            return res.status(401).json({ message: 'Not authorized, token invalid or expired' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token provided' });
    }
};

module.exports = { protect };
