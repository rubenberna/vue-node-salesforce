// const { Pool } = require('pg')

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });


// module.exports = {
//   // Get contact in DB
//   searchContract: (id) => {
//     const query = {
//       name: 'fetch-user',
//       text: 'SELECT * FROM contacts WHERE externalid = $1',
//       values: id
//     }
//     pool.connect()
//     return pool.query(query)
//       .then( res => res.rows[0] )
//       .catch( e => e.stack )
//   },

//   // Insert contact in DB
//   createContact: (contact) => {
//     const text = 'INSERT INTO contacts (name, email, externalid, regioid, office, signature, signedat, ipaddress, contractversion, typedname, signedtime, street, postalcode, city ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *'
//     const values = [ contact.name, contact.email, contact.externalId, contact.regioId, contact.office, contact.signature, contact.signedAt, contact.ipAddress, contact.contractVersion, contact.typedName, contact.signedTime, contact.street, contact.postalCode, contact.city ]
//     pool.connect()
//     return pool.query(text, values)
//       .then( res => res.rows )
//       .catch( e => e.stack )
//   },

//   // Delete
//   deleteContract: (id) => {
//     const query = {
//       text: 'DELETE FROM contacts WHERE externalId = $1',
//       values: id
//     }
//     pool.connect()
//     return pool.query(query)
//       .then( res => res.rows[0] )
//       .catch( e => e.stack )
//   },

//   getAll: () => {
//     const query = {
//       text: 'SELECT * FROM contacts'
//     }

//     pool.connect()
//     return pool.query(query)
//       .then(res => res.rows)
//       .catch(e => e.stack )
//   }
// }
