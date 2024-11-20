'use strict';
const tasksGet = require('./tasks-get');
const tasksPost = require('./tasks-post');
const tasksPatch = require('./tasks-patch');
const tasksComplete = require('./tasks-complete');
const tasksDelete = require('./tasks-delete');

module.exports = {
    tasksGet,
    tasksPost,
    tasksPatch,
    tasksComplete,
    tasksDelete
}