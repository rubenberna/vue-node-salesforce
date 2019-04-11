import axios from 'axios'

const contracts = '/contracts/'
const update = '/update/'
const emailservice = '/emailservice/'

class ContractService {
  // Get all contracts
  static getContracts() {
    return (
      fetch(contracts, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .catch(err => err)
    );
  }
  // Add contract to DB
  static addContract(dbContact) {
    return fetch(`${contracts}add`, {
      method: "POST",
      body: JSON.stringify(dbContact),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( res => res )
    .catch( err => err )
  }

  static addEmail(contact) {
    return axios
      .post(`${update}email`, {
        contact
      })
      .then(res => res)
      .catch(err => err);
  }

  // Send email to Contact
  static sendEmail(payload) {
    return axios
      .post(emailservice, {
        payload
      })
      .then(res => res)
      .catch(err => err)
  }

  static findContract(id) {
    return axios
      .post(contracts, {
        id
      })
      .then(res => res.data.Item)
      .catch(err => err)
  }

  static delete(id) {
    return axios
    .post(`${contracts}delete`, {
      id
    })
    .then( res => res )
    .catch( err => err )
  }

  static sendAll(list) {
    return axios
    .post(`${contracts}all`, {
      list
    })
    .then( res => console.log(res))
    .catch( e => console.log(e) )
  }
}

export default ContractService
