const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      required: [true, 'Firstname is required'],
      type: String
    },
    lastname: {
      required: [true, 'Lastname is required'],
      type: String
    },
    email: {
      required: [true, 'Email is required'],
      type: String
    },
    password: {
      required: [true, 'Password is required'],
      type: String
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }, 
  {
    timestamp: true
  }
);

//Hash Password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
   next();
  }
 
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


//compile schema into model
const User = mongoose.model('User', userSchema);
module.exports = User;
