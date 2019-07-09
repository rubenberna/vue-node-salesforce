const url = 'query/'
import store from '../../store'
import axios from 'axios'

class QueryService {
  static searchID(dplanId) {
    return axios.post(url, {
      dplanId
    })
    .then(res =>  {
      const succMsg = store.getters.locale === 'fr' ? 'Connecté avec succès' : 'Succesvol ingelogd'
      store.dispatch('createFlash', { msg: succMsg, type: 'success'})
      return res.data })
    .catch(err => {
      const errorMsg = store.getters.locale === 'fr' ? 'Aucun utilisateur n\'a été identifié sous cet ID' : 'Er werd geen gebruiker gevonden met deze ID'
      store.dispatch('createFlash', { msg: errorMsg, type: 'error'})
      return 'not_found'
    })
  }
}

export default QueryService
