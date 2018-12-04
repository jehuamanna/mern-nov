// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWIILO_AUTH_TOKEN;
console.log(process.env.TWIILO_AUTH_TOKEN)

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13124677659',
     to: '+919008141866'
   })
  .then(message => console.log(message.sid))
  .done();