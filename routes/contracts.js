const express = require('express');
const db = require('../config/postgres');
const session = require("express-session");

const router = express.Router();

// Get a Contact per External ID
router.post('/', async (req, res) => {
  const id = Object.values(req.body)
  console.log(id)
  await db.searchContract(id)
    .then(contact => res.status(201).send(contact))
    .catch(err => res.status(404).send(err))
})

// Add a Contact to the database
router.post('/add', async (req, res) => {
  const contact = req.body
  updateSF(contact.id)
  await db.createContact(contact)
  .then(contact => res.sendStatus(200))
  .catch(err => res.sendStatus(500))
})

const updateSF = (id) => {
  const org = session.org
  org.sobject("Contact").update({
    Id: id,
    Signed_Contract_Date__c: Date.now(),
    Signed_Contract__c: true
  }, function (err, ret) {
    try {
      console.log( ret )
    } catch (e) {
      console.log( err );
    }
  })
}

// Delete
router.post('/delete', async (req, res) => {
  const id = Object.values(req.body)
  console.log(id);
  await db.deleteContract(id)
  .then(record => res.status(201).send(record))
  .catch(err => res.status(404).send(err))
})

module.exports = router;
