const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./src/database');
const faker = require('faker');
const path = require('path');

const User = require('./src/models/user.model');

// configure express to use cors()
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get('/user-create', async (req, res) => {
  const user = new User({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });

  await user.save().then(() => console.log('User created'));

  res.send('User created \n');
});

app.get('/users-delete', async (req, res) => {
  await User.deleteMany({}).then(() => console.log('Users deleted'));

  res.send('Users deleted \n');
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js app \n');
});

// Serve static assets (build folder) if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}! - http://localhost:${PORT}`);
  connectDb().then(() => console.log('MongoDb connected'));
});