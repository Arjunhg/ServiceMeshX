const logger = require("../../../post-service/src/utils/logger");

const authenticateRequest = (req, res, next) => {
    
    const userId = req.headers['x-user-id'];

    if(!userId){
        logger.warn(`Access attempted without userId`);
        res.status(401).json({
            success: false,
            message: "Authentication required! Please login to continue"
        })
    }

    req.user = { userId };
    next();
}

module.exports = {authenticateRequest};