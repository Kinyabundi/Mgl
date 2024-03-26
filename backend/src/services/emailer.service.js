const nodemailer = require('nodemailer');
const i18n = require('i18n');
i18n.configure({
  locales: ['En', 'Mn'],
  directory: __dirname + '/locales',
  defaultLocale: 'En',
});
const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
console.log(EMAIL_SERVICE);

module.exports = {
  deliverEmail: function (dest, subject, body) {
    var transport = nodemailer.createTransport({
    //   service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        //user: process.env.EMAIL_USER,
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: dest,
      subject: subject,
      text: body,
    };

    console.log(mailOptions);

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  },
};
