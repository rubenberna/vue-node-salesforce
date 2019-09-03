// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(email, id, locale) {

    const transporter = nodemailer.createTransport({
      host: "smtp.postmarkapp.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const nlMessage = {
      from: '"EasyLife" <Customercare@easylifedc.be>', // sender address
      to: email, // list of receivers
      subject: "Easy Life - Een kopie van uw contract", // Subject line
      html: `<p>Beste klant,</p> <p>Wij hebben uw getekende overeenkomst goed ontvangen.</p> <p>Waarvoor onze welgemeende dank!</p><p>Uw getekende overeenkomst blijft steeds beschikbaar voor inzage op https://sign.easylifedc.be. Wanneer u opnieuw uw code <b>${id}</b> ingeeft en op de button ‘zie contract’ klikt, opent zich uw overeenkomst.</p>
      <p>Voor verdere vragen of inlichtingen kan u steeds terecht bij onze Klantendienst: 0800 62 080 of customercare@easylifedc.be.</p> <p>Met vriendelijke groeten, </p> <p>Customer Care Department</p><p>Easy Life</p><p>Draaiboomstraat 6, 2160 Wommelgem</p><p>03/369 89 03</p>`, // html body
    };

    const frMessage = {
      from: '"EasyLife" <Customercare@easylifedc.be>', // sender address
      to: email, // list of receivers
      subject: "Easy Life - Une copie de votre contrat", // Subject line
      html: `<p>Chers client,</p> <p>Nous avons bien reçu votre contrat signé.</p> <p>De ce fait, nous vous en remerçions.</p> <p>Votre contrat signé reste pour autant disponible pour consultation sur https://sign.easylifedc.be . </p> <p>Quand vous entrez à nouveau votre code <b>${id}</b> et que vous cliquez sur le bouton "voir contrat", votre contrat apparaitra alors.</p><p>Pour tout autre question ou information supplémentaire,veuillez vous adresser à notre service client: soit par téléphone au 0800 62 080 ...ou par courrier électronique customercare@easylifedc.be .</p> <p>Cordialement, </p> <p>L'équipe service clientèle</p><p>Easy Life</p><p>Draaiboomstraat 6, 2160 Wommelgem</p><p>03/369 89 03</p>`, // html body
    }

    let message = locale === 'nl' ? nlMessage : frMessage

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
      }
      console.log(info);
    });
  }
}
