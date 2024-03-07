const nodemailer = require("nodemailer");

//send mail from testing account

exports.sendMail = async (req, res) => {
  //created a dummy account
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let message = {
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "you should recieve an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.message,
      });
    });
};

exports.getBill = (req, res) => {
  let config = {
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  let message = {
    from: process.env.SMPT_MAIL,
    to: "shku1920@gmail.com",
    subject: "Regarding password change",
    text: "You can change your password using this link",
    html: "<b>Hello world?</b>",
  };

  transporter.sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "You should receive an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.message,
      });
    });
};
