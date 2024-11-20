'use strict';
const router = require('express').Router();
const { tasks } = require('../db/task');

function getTaskList(_req, res) {
    res.status(200).json(tasks);
}

router.get('/tasks/list',
    getTaskList
);

module.exports = router;