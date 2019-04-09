const AWS = require('aws-sdk')
AWS.config.region = process.env.REGION

const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB();

const ddbTable =  process.env.STARTUP_SIGNUP_TABLE;
const snsTopic =  process.env.NEW_SIGNUP_TOPIC;

module.exports = {
  getContract: () => {

  },

  createContact: () => {
    const item = {
      'externalId': { 'N': contact.externalId },
      'name': { 'S': contact.name },
      'email': { 'S': contact.email },
      'regioid': { 'S': contact.regioId },
      'office': { 'S': contact.office },
      'signature': { 'S': contact.signature },
      'signedat': { 'S': contact.signedAt },
      'ipaddress': { 'S': contact.ipAddress },
      'contractversion': { 'S': contact.contractVersion },
      'typedname': { 'S': contact.typedName },
      'signedtime': { 'S': contact.signedTime },
      'street': { 'S': contact.street },
      'postalcode': { 'S': contact.postalcode },
      'city': { 'S': contact.city }    
    }


  },

  deleteContract: () => {

  }
}
