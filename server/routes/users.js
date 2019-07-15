// Pull in dependencies
const express = require("express");

// Controllers to be used
const UserController = require('../controller/user');

// Create profile route
const userRoutes = express.Router();
userRoutes.post('/register', UserController.createUser);
userRoutes.post('/login', UserController.loginUser);

module.exports = userRoutes;
