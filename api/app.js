'use strict';
const express = require('express');
const routes = require('./lib/routes');
const app = express();
require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
app.use(express.json());

Object.keys(routes)
    .forEach((key) => {
    app.use('/api', routes[key]);
});