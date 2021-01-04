const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ msg: 'Yo!, welcome to auth server' }));
app.use('/auth', require('./routes/user'));

const PORT = 4500 || process.env.PORT;

app.listen(PORT, () => console.log(`Running on port::${PORT}`));
