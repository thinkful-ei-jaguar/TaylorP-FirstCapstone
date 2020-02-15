import config from '../config'

const SpiritApiService = {
  getSpirits(id) {
    return fetch(`${config.API_ENDPOINT}/cabinet/${id}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default SpiritApiService