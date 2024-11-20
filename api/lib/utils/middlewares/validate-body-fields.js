'use strict';

function validateBodyFields(req, res, next) {
    const validBodyKeys = process.env.VALID_BODY_FIELDS.split(',');
    const invalidKeys = Object.keys(req.body).filter(key => !validBodyKeys.includes(key));
    
    if (invalidKeys.length > 0) {
        return res.status(400).json({
            error: `Invalid fields in request body: ${invalidKeys.join(', ')}`
        });
    }
    
    return next();
}

module.exports = validateBodyFields;
