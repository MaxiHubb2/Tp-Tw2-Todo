'use strict';
const router = require('express').Router();
const { checkIfTaskExist, validateBodyFields } = require('../utils/middlewares');

function editTasks(req, res, next) {
    req.task.title = req.body.title || req.task.title;
    req.task.description = req.body.description || req.task.description;
    req.task.finishDate = req.body.finishDate 
        ? new Date(req.body.finishDate) 
        : req.task.finishDate;

    return res.status(200).json(req.task);
}

router.patch('/tasks/:id/edit',
    checkIfTaskExist,
    validateBodyFields,
    editTasks
);

module.exports = router;
