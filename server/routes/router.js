const express = require("express");

const users = require("./users");
const profiles = require("./profiles");

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();

    // User routes
    apiRoutes.use('/users', users);
    // Profile routes
    apiRoutes.use('/profiles', profiles);

    // Set url for API group routes
    app.use('/api', apiRoutes);
};
