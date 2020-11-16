const express = require('express');
const engine = require('ejs-locals');

const db = require('./models');
const userRouter = require('./router/user');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.set('views', 'src/views');

app.use('/users', userRouter);

app.get('/', async (req, res) => {
  try {
    const users = await db.User.findAll({});

    res.render('home', { users });
  } catch (err) {
    res.send(err).status(400);
  }
});

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
);
