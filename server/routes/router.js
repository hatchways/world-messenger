const express = require("express");

const users = require("./users");
const profiles = require("./profiles");
const contacts = require("./contacts");
const conversations = require("./conversations");
module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();

    // User routes
    apiRoutes.use('/users', users);
    // Profile routes
    apiRoutes.use('/profiles', profiles);
    // Contact routes
    apiRoutes.use('/contacts', contacts);
    // Conversation routes
    apiRoutes.use('/conversations', conversations);

    // Set url for API group routes
    app.use('/api', apiRoutes);
};
