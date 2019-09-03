const express = require('express');
const dynamo = require('../config/dynamodb');
const salesforce = require('../config/salesforce');
const nodemailer = require('../config/nodemailer');

const router = express.Router();

// Get a Contact per External ID
router.post('/', async (req, res) => {
  const id = Object.values(req.body).toString()
  await dynamo.getContract(id)
    .then(contact => res.status(200).send(contact))
    .catch(err => res.status(404).send(err))
})

// Add a Contact to the database
router.post('/add', async (req, res) => {
  const contact = req.body  
  salesforce.updateSF(contact.id)
  nodemailer.sendEmail(contact.email, contact.externalId, contact.locale)
  await dynamo.createContact(contact)
    .then(data => res.sendStatus(200))
    .catch(err => res.status(404).send(err))
})

// Delete
router.post('/delete', async (req, res) => {
  const id = Object.values(req.body).toString()
  await dynamo.deleteItem(id)
    .then(contact => res.status(200).send(contact))
    .catch(err => res.status(404).send(err))
})

// get all records from Postgres
router.get('/', async (req, res) => {
  await db.getAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

// post batch
router.post('/all', async (req, res) => {
  const all = req.body.list
  dynamo.sendAll(all)
})

module.exports = router;
