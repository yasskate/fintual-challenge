// Coin Market Cap
// const BASE_URL = 'https://pro-api.coinmarketcap.com/v1'
// const API_KEY = 

// Atom Finance
// const BASE_URL = 'https://docs.atom.finance/'
// const API_KEY = ""

// Twelve Data
const BASE_URL = "https://api.twelvedata.com/"
const API_KEY = "3ea04e71b5aa4baf8b635b02e0a9f44d"

class Api {
  request(method, pathApi) {
    const url = `${BASE_URL}${pathApi}&apikey=${API_KEY}`

    return fetch(url, { method })
      .then(response => response.json())
      .then(({ status, code, message, values }) => {
        if(status === 'ok') {
          return {
            startDatePrice: Number(values[values.length - 1].close),
            endDatePrice: Number(values[0].close)
          }
        }

        return {
          status,
          message: `Error (${code}): ${message}`
        }
      })
      .catch(error =>`Error (${error.status}): ${method} request failed successfully 😂 `)
  }
}

export default Api

