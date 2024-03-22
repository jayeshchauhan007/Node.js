const express = require("express");
const signupController = require("../controllers/signup.controller");

const signupRouter = express.Router();
signupRouter.get('/', signupController.getSignupForm);
signupRouter.post('/', signupController.postSignupForm);

module.exports = signupRouter;