const logger = require("../utils/logger");
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    logger.info(`Validating token...`);

    if(!token){
        logger.warn(`Access attempted without valid token`);
        res.status(401).json({
            success: false,
            message: "Authentication required!"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            logger.warn(`Invalid token!`);
            res.status(429).json({
                success: false,
                message: "Invalid token"
            })
        }

        req.user = user;
        next();
    })
}

module.exports = validateToken;