import axios from 'axios'
import fetch from 'isomorphic-fetch'

import store from '../../store'

const contracts = '/contracts/'

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

  static findContract(id) {
    return axios
      .post(contracts, {
        id
      })
      .then(res => {
        store.dispatch('createFlash', { msg: 'Succesvol ingelogd', type: 'success' })
        return res.data.Item
      })
      .catch(err => {
        store.dispatch('createFlash', { msg: 'Er werd geen gebruiker gevonden met deze ID', type: 'error' })
        return err
      })
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
