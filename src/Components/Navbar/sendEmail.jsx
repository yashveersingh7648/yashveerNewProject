const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'आपका_ईमेल@gmail.com',
    pass: 'आपका_पासवर्ड'
  }
});

const sendEmail = (name, email, contact, subject, body) => {
  const mailOptions = {
    from: 'आपका_ईमेल@gmail.com',
    to: 'प्राप्तकर्ता_का_ईमेल@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\n\nMessage:\n${body}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
