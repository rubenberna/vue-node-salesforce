const url = 'query/'
import store from '../../store'
import axios from 'axios'

class QueryService {
  static searchID(dplanId) {
    return axios.post(url, {
      dplanId
    })
    .then(res =>  {
      store.dispatch('createFlash', {msg: 'Succesvol ingelogd', type: 'success'})
      return res.data })
    .catch(err => {
      store.dispatch('createFlash', {msg: 'Er werd geen gebruiker gevonden met deze ID', type: 'error'})
      return err
    })
  }
}

export default QueryService
