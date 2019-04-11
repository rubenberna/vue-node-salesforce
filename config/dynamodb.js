const AWS = require('aws-sdk')
AWS.config.update({ region: 'eu-west-1' })

const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB();

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
        if(err) return reject(err)
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

    const params = {
      RequestItems: {
        'contacts': [
          {...list}
        ]
      }
    }

    ddb.batchWriteItem(params, (err, data) => {
      if(err) console.log('Error ', err)
      else console.log('success', data)
    })
    // console.log(params.RequestItems)
  }
}
