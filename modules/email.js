var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.mail.username,
        pass: config.mail.password
    }
});

function sendMail(data, callback) {
    if (!data.name || !data.email || !data.message) {
        console.log("invalid data sent", data);
        return callback({ code: 400, message: "Invalid request" });
    }
    var mailOptions = {
        from: `"${data.name} ${data.surname}" <${data.email}>`,
        to: config.mail.username,
        subject: `Porfolio contact email from ${data.email}`,
        text: data.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return callback({ code: 500, message: "Email not sent" });
        }
        console.log("mail successfully sent");
        callback({ code: 200, message: "Email sent" });
    });
}

module.exports = sendMail;