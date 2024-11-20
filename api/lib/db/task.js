let tasks = []; 
let currentId = 1;

function incrementCurrentId() { 
    return currentId++;
}

module.exports = {
    tasks,
    incrementCurrentId,
};
