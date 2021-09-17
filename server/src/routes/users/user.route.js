const express = require('express');
const { registerUser, fetchUsersCtrl } = require('../../controllers/users/user.controller');

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get('/', fetchUsersCtrl);

module.exports = userRoute;