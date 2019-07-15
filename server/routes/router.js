const express = require('express');

const profiles = require('./profiles');

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();

    // User profile routes
    apiRoutes.use('/profiles', profiles);

    // Set url for API group routes
    app.use('/api', apiRoutes);
};
