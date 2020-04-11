const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const emailSender = require('./email');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', emailSender)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

app.listen(8000, () =>
  console.log('Express server running on localhost: 8000')
);
