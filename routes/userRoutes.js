const express = require('express');
const { append } = require('express/lib/response');
const controller = require('../controllers/userController');
const {isGuest, isLoggedIn} = require('../middlewares/auth');

const userRouter = express.Router();

//Get /new: send sign up page

userRouter.get('/new', isGuest, controller.new);

//Get /profile: send profile page

userRouter.get('/profile', isLoggedIn, controller.profile);

//Get /login: send login page

userRouter.get('/login', isGuest, controller.login);

//Get /logout: logout the user

userRouter.get('/logout', isLoggedIn, controller.logout);

//Post /login: process login request

userRouter.post('/login', isGuest, controller.getUserLogin);

//Post /: create a new user

userRouter.post('/', isGuest, controller.create);

module.exports = userRouter;