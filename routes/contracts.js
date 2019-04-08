const express = require('express');
const db = require('../config/postgres');
const session = require("express-session");

const router = express.Router();

// Get a Contact per External ID
router.post('/', async (req, res) => {
  const id = Object.values(req.body)
  // {...req.body}
  await db.searchContract(id)
    .then(contact => res.status(201).send(contact))
    .catch(err => res.status(404).send(err))
})

// Add a Contact to the database
router.post('/add', (req, res) => {
  const contact = req.body
  db.createContact(contact)
  updateSF(contact.id);
})

const updateSF = (id) => {
  const org = session.org

  org.sobject("Contact").update({
    Id: id,
    Signed_Contract_Date__c: Date.now(),
    Signed_Contract__c: true
  }, function (err, ret) {
    try {
      console.log(ret);
    } catch (e) {
      console.log(err);
    }
  })
}

// delete
router.post('/delete', async (req, res) => {
  const id = Object.values(req.body)
  await db.deleteContract(id)
  .then(record => res.status(201).send(record))
  .catch(err => res.status(404).send(err))
})

module.exports = router;
