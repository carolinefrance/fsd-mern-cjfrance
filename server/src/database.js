const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDb;

/* OLD VERSION
const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me';
--- const connection = 'mongodb://localhost:27017/dockerize-me'; --- this link confirms that the app works on localhost:8080 
--- const connection = 'mongodb+srv://Caroline:Th30br0m1n3@fsd-mern-cjfrance.e7z8trg.mongodb.net/?retryWrites=true&w=majority'; --- this is the link to the mongo database 

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;*/