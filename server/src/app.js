const express = require('express');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/users/user.route');



const app = express();

const logger = (req, res, next) => {
  console.log('Am a Logger');
  next();
};

app.use(logger);

//dbConnect
dbConnect();

//middlewares
app.use(express.json());


//routes
app.use('/api/users', userRoute);


//Error
app.use(notFound);
app.use(errorHandler);


module.exports = app;