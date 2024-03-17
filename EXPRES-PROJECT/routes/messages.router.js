const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();
messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessages);
messagesRouter.get('/file', messagesController.getFile);

module.exports = messagesRouter;