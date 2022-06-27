import Api from './api.js'

class Stock extends Api {
  constructor(props) {
    super(props)
    this.symbol = props.symbol
  }

  async price(startDate, endDate) {
    const url = `time_series?symbol=${this.symbol}&interval=1day&start_date=${startDate}&end_date=${endDate}`
    try {
      const response = await this.request("GET", url)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

export default Stock
