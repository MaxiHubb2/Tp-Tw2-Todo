'use strict';
const validateTask = require('./validate-tasks');
const checkIfTaskExist = require('./check-if-tasks-exists');
const validateBodyFields = require('./validate-body-fields');

module.exports = {
    validateTask,
    checkIfTaskExist,
    validateBodyFields
}