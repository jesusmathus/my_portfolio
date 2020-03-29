const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const oauth2 = google.auth.OAuth2;
const credentials = require('./secrets/secrets');

const oauth2Client = new oauth2(
  credentials.CLIENTID,
  credentials.CLIENTSECRET,
  credentials.REDIRECTURL
);

oauth2Client.setCredentials({
  refresh_token: credentials.REFRESHTOKEN
});
const newAccessToken = oauth2Client.getAccessToken()

const transport = {
  host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: credentials.USER,
    clientId: credentials.CLIENTID,
    clientSecret: credentials.CLIENTSECRET,
    refreshToken: credentials.REFRESHTOKEN,
    accessToken: newAccessToken
  }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if(error) {
    console.log(error);
  } else {
    console.log('Server is ready to receive messages.');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const emailSubject = req.body.subject
  const message = req.body.message

  const mail = {
    from: name.concat(' <', email, '>'),
    to: credentials.USER,
    subject: emailSubject,
    text: message.concat(' <', email, '>')
  }

  transporter.sendMail(mail, (err, data) => {
    if(err) {
      res.json({ msg: 'fail' })
      console.log(err)
    } else {
      res.json({ msg: 'success' })
    }
    transporter.close()
  })
});

module.exports = router;
