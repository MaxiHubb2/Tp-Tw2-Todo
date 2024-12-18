'use strict';

function validateTask(req, res, next) { 
    const { title } = req.body;
    if(!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    return next();
}

module.exports = validateTask;