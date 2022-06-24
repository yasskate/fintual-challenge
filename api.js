
// Typicode token
// const BASE_URL ='https://jsonplaceholder.typicode.com'
// const API_KEY = "No token req."

// Coin Market Cap
// const BASE_URL = 'https://pro-api.coinmarketcap.com/v1'
// const API_KEY = " 2e5e6900-b100-4cf5-8be7-949bc6e995e1"

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
      .then(data => data.values[0])
      .catch(error =>`Error (${error.status}): ${method} request failed successfully 😂 `)
  }
}

export default Api