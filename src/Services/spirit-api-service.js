import config from '../config'
import TokenService from './token-service'

const SpiritApiService = {
  getSpirits(id) {
    return fetch(`${config.API_ENDPOINT}/cabinet/${id}`, {
      headers: {
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postSpirit(spirit, id) {
    return fetch(`${config.API_ENDPOINT}/cabinet/${id}`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(spirit)
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteSpirit(spirit, id) {
    return fetch(`${config.API_ENDPOINT}/cabinet/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization' : `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(spirit)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  }
}

export default SpiritApiService