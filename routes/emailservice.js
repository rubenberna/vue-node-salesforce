const express = require('express');
const router = express.Router();
const nodemailer = require('../config/nodemailer');

router.post('/', async (req, res) => {
  const { payload } = req.body

  try {
    const mailing = await nodemailer.sendEmail(payload);
    res.status(201).send('Email sent with attachment')
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router;
