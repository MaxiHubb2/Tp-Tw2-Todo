'use strict';
const { tasks } = require('../../db/task');

function checkIfTaskExist(req, res, next) {
    const task = tasks.find((task) => task.id === Number(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    req.task = task;
    return next();
}

module.exports = checkIfTaskExist;
