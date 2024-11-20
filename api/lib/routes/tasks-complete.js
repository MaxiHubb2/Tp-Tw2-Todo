'use strict';
const router = require('express').Router();
const { checkIfTaskExist } = require('../utils/middlewares');

function completeTasks(req, res, next) {
    req.task.completed = true;
    return res.status(200).json(req.task);
}

router.post('/tasks/:id/complete',
    checkIfTaskExist,
    completeTasks
);

module.exports = router;
