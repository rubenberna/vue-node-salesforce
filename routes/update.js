const express = require('express');
const router = express.Router();
const session = require('express-session');

// Update signed contract fields in Salesforce
router.post('/', (req, res) => {
  const id = req.body.id
  const org = session.org

  org.sobject("Contact").update({
    Id: id,
    Signed_Contract_Date__c: Date.now(),
    Signed_Contract__c: true
  }, function(err, ret) {
    try {
      res.status(201).send("Salesforce fields updated succesfully")
    } catch (e) {
      res.status(400).send(e)
    }
  })
})

// Update emial field in Salesforce
router.post('/email', (req, res) => {
  const id = req.body.contact.id
  const email = req.body.contact.email
  const org = session.org

  org.sobject("Contact").update({
    Id: id,
    Email_External__c: email
  }, function(err, ret) {
    try {
      res.status(201).send("Salesforce email updated succesfully")
    } catch (e) {
      res.status(400).send(e)
    }
  })
})

module.exports = router;
