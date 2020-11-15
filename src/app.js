const express = require('express');

const userRouter = require('./router/user');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Welcome to mobile legend');
});

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${3000}'`)
);
