const AWS = require('aws-sdk')
const sns = new AWS.SNS()

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const ddb = new AWS.DynamoDB()

module.exports = {
  getContract: (id) => {
    const params = {
      TableName: 'contacts',
      Key: {
        'externalId': { 'N': id }
      }
    }
    return new Promise((resolve, reject) => {
      ddb.getItem(params, (err, data) => {
        if(err) {
          console.log(err)
          return reject(err) }
        return resolve(data)
      })
    })
  },

  createContact: (contact) => {
    const params = {
      TableName: 'contacts',
      Item: {
        'externalId': { 'N': contact.externalId },
        'name': { 'S': contact.name },
        'email': { 'S': contact.email },
        'regioid': { 'S': contact.regioId },
        'office': { 'S': contact.office },
        'signature': { 'S': contact.signature },
        'signedat': { 'S': contact.signedAt },
        'ipaddress': { 'S': contact.ipAddress },
        'contractversion': { 'N': contact.contractVersion },
        'typedname': { 'S': contact.typedName },
        'signedtime': { 'S': contact.signedTime },
        'street': { 'S': contact.street },
        'postalcode': { 'N': contact.postalCode },
        'city': { 'S': contact.city },
        'id': { 'S': contact.id }
      }
    }
    return new Promise((resolve, reject) => {
      ddb.putItem(params, (err, data) => {
        if(err) return reject(err)
        return resolve(data)
      })
    })
  },

  deleteContract: (id) => {
    const params = {
      TableName: 'contacts',
      Key: {
        'externalId': { 'N': id }
      }
    }
    return new Promise((resolve, reject) => {
      ddb.deleteItem(params, (err, data) => {
        if(err) return reject(err)
        return resolve(data)
      })
    })
  },

  sendAll: (list) => {
    list.forEach(contact => {
      ddb.putItem({
        TableName: 'contacts',
        Item: {
          'externalId': { 'N': contact.externalid },
          'name': { 'S': contact.name },
          'email': { 'S': contact.email },
          'regioid': { 'S': contact.regioid || 'not provided'},
          'office': { 'S': contact.office || 'not provided'},
          'signature': { 'S': contact.signature || 'not provided'},
          'signedat': { 'S': contact.signedat },
          'ipaddress': { 'S': contact.ipaddress || 'not provided'},
          'contractversion': { 'N': "1" },
          'typedname': { 'S': contact.typedname },
          'signedtime': { 'S': contact.signedtime },
          'street': { 'S': contact.street || 'not provided' },
          'postalcode': { 'N': contact.postalcode || 'not provided' },
          'city': { 'S': contact.city },
        }
      }, (err, data) => {
        if(err) console.log(err)
        else console.log(data)
      })
    })
  }
}
