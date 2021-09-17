const User = require("../../models/user.model");
const expressAsyncHandler = require('express-async-handler');


//Register
const registerUser = expressAsyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req?.body;

    //checkk if user exists
    const userExists = await User.findOne({ email: req.body.email });
    if(userExists) throw new Error("User Already Exists");
    try {
      const user = await User.create( { firstname, lastname, email, password });
      res.status(200).json(user);
    } catch (error) {
      res.json(error);
    }
  } 
);


//fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try{
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }
);



module.exports = {registerUser, fetchUsersCtrl};