// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(email, id) {
    // const { email } = payload
    // const { dom } = payload
    // const { id } = payload

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
      html: `<p>Beste klant,</p> <p>Wij hebben uw getekende overeenkomst goed ontvangen.</p> <p>Waarvoor onze welgemeende dank!</p><p>Uw getekende overeenkomst blijft steeds beschikbaar op https://sign.easylifedc.be voor inzage door opnieuw uw code <b>${id}</b> in te geven en op de button ‘zie contract’ te klikken.<p>Voor verdere vragen of inlichtingen kan u steeds terecht bij onze Klantendienst: 0800 62 080 of customercare@easylifedc.be.</p> <p>Met vriendelijke groeten, </p> <p>Customer Care Department</p><p>Easy Life</p><p>Prins Boudewijnlaan 133</p><p>03/369 89 03</p>`, // html body

      // attachments: [
      //   {
      //     path: dom
      //   }
      // ]
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
      }
      console.log(info);
    });
  }
}
