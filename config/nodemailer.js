// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(payload) {
    const { email } = payload
    const { dom } = payload
    const { id } = payload

    const transporter = nodemailer.createTransport({
      host: "smtp.postmarkapp.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Message object
    let message = {
      from: '"EasyLife" <Customercare@easylifedc.be>', // sender address
      to: email, // list of receivers
      subject: "Easy Life - Een kopie van uw contract", // Subject line
      html: `<p>Beste klant,</p> <p>U hebt uw klantenovereenkomst reeds getekend, bedankt hiervoor.</p> <p>In bijlage kan u uw getekende overeenkomst terugvinden.</p><p>U kan uw overeenkomst steeds zelf raadplegen met uw persoonlijke code op https://sign.easylifedc.be.</p><p>Ondervindt u hinder bij het downloaden van de bijlage of is deze niet zichtbaar?</p><p>Via de link https://sign.easylifedc.be, kan u uw persoonlijke code <b>${id}</b> ingeven en uw overeenkomst bekijken en/of printen.</p> <p>Voor verdere vragen of inlichtingen kan u steeds terecht bij onze Klantendienst: 0800 62 080 of customercare@easylifedc.be.</p> <p>Met vriendelijke groeten, </p> <p>Customer Care Department</p><p>Easy Life</p><p>Prins Boudewijnlaan 133</p><p>03/369 89 03</p>`, // html body
      attachments: [
        {
          path: dom
        }
      ]
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
      }
      console.log(info);
    });
  }
}

