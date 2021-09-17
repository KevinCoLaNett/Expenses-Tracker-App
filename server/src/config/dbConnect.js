const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin123@expenses-tracker.d8mbq.mongodb.net/expenses-tracker-db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true
    });
    console.log('DB Connected Successfully!')
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
};

module.exports = dbConnect;