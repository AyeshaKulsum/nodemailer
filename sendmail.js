var nodemailer = require('nodemailer');
var mail = { 'email': 'pwd' };
for (key in mail) {
    for (i = 0; i <= 97; i++) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            pool: true,
            secure: true,
            port: 465,
            auth: {
                user: key,
                pass: mail[key]
            }
        });
        var mailOptions = {
            from: key,
            to: 'example1@gmail.com,example2@gmail.com',
            subject: 'Design Your Model S | Tesla',
            html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today! Sorry dont get irritated. its fun with code</p>',
            dsn: {
                id: '123',
                return: 'headers',
                notify: ['failure', 'delay'],
                recipient: 'examplex@gmail.com'
            }
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + i + ' ' + info.response);
            }
        });
        console.log(`Send email to ${mailOptions.to} ${i}th time`);
    }

}
