'use strict';
const router = require('express').Router();
const { tasks } = require('../db/task');
const { checkIfTaskExist } = require('../utils/middlewares');

function deleteTask(req, res) {
    const taskIndex = tasks.findIndex((task) => task.id === req.task.id);
    tasks.splice(taskIndex, 1);
    return res.status(200).json({});
}

router.delete('/tasks/:id/delete', checkIfTaskExist, deleteTask);

module.exports = router;
