const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.smtpEmailTest =
functions.region("asia-southeast2").https.onRequest((_request, response) => {
  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-west-2.amazonaws.com",
    port: 25,
    auth: {
      user: "",
      pass: "",
    // eslint-disable-next-line comma-dangle
    }
  });

  // send email
  transporter.sendMail({
    from: "notifications@test",
    to: "waronsite@gmail.com",
    subject: "Test Email Subject 2",
    html: "<h1>ExampEle HTML Message Body 22</h1>",
  }, (error, info) => {
    if (error) {
      // If an error is thrown
      response.send(error);
    } else {
      response.send("sent");
    }
  });
});
