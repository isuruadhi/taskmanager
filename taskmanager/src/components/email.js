var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alert.taskmanager@gmail.com",
    pass: "welcome@123",
  },
});

var mailOptions = {
  from: "alert.taskmanager@gmail.com",
  to: "isuruadhikari2@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
