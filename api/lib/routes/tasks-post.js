'use strict';
const router = require('express').Router();
const { tasks, incrementCurrentId } = require('../db/task');
const { validateTask, validateBodyFields } = require('../utils/middlewares');
    
function createTask(req, res, next) {
    const newTask = {
        id: incrementCurrentId(),
        title: req.body.title,
        description: req.body.description || '',
        createdAt: new Date(),
        finishDate: new Date(req.body.finishDate),
        completed: false,
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
}


router.post('/tasks/create',
    validateTask,
    validateBodyFields,
    createTask
);

module.exports = router;