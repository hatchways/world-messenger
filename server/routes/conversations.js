// Pull in dependencies
const express = require("express");
const passport = require("passport");

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', {session: false});

// Controllers to be used
const ConversationController = require('../controller/conversation');

// Create profile route
const conversationRoutes = express.Router();
conversationRoutes.get("/", requireAuth, ConversationController.getUserConversations);
conversationRoutes.get("/conversation/:conversationId", requireAuth, ConversationController.getConversationMessages);
conversationRoutes.post('/new/', requireAuth, ConversationController.createNewConversation);
conversationRoutes.post("/conversation/", requireAuth, ConversationController.createNewMessage);

module.exports = conversationRoutes;
