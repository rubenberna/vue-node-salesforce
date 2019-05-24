const express = require('express');
const router = express.Router();
const session = require('express-session');

router.post('/', async (req, res) => {
  const dplanId = req.body.dplanId
  const org = session.org
  const q = `SELECT Id, Name, Email, RegioId__c, MailingAddress, External_Id__c, Signed_Contract__c, Signed_Contract_Date__c, language_lead__c FROM Contact WHERE External_Id__c = '${dplanId}'`;

  await org.query(q, function(err, result) {
    if(!err && result.records[0]) res.status(201).send(result.records[0]);
    else res.status(404).send('No user with that ID found', err)
  })
})

module.exports = router;
