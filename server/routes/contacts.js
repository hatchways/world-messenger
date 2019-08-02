// Pull in dependencies
const express = require("express");
const passport = require("passport");

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', {session: false});

// Controllers to be used
const ContactController = require('../controller/contact');

// Create profile route
const contactRoutes = express.Router();
contactRoutes.get('/list', requireAuth, ContactController.getContacts);
contactRoutes.post('/request', requireAuth, ContactController.createRequest);
contactRoutes.post('/accept', requireAuth, ContactController.acceptRequest);
contactRoutes.post('/reject', requireAuth, ContactController.rejectRequest);

module.exports = contactRoutes;
