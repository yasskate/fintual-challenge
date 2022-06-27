import Stock from './stock.js'
import { convertToUSD, getDaysHeld } from './utils.js'

class Portfolio {
  constructor(props) {
    const { stocks } = props
    this.stocks = stocks
  }

  async requestStockPrices({ symbol, startDate, endDate }) {
    const stock = new Stock({ symbol })
    const { startDatePrice, endDatePrice, status, message } = await stock.price(startDate, endDate)
    return {
      error: { status, message },
      response: { startDatePrice, endDatePrice }
    }
  }

  calculateInitialBalance(totalBalance, currentStock) {
    return totalBalance + (currentStock.startPrice * currentStock.quantity)
  }

  calculateCurrentBalance(totalBalance, currentStock) {
    return totalBalance + (currentStock.endPrice * currentStock.quantity)
  }

  calculateTotalProfit(initialBalance, currentBalance) {
    return Number(currentBalance) - Number(initialBalance)
  }

  calculatePeriodReturn(initialBalance, currentBalance) {
    return Number(((currentBalance - initialBalance) / initialBalance).toFixed(4))
  }

  calculateAnnualizedReturn(startDate, endDate, cumulativeReturn) {
    const daysHeld = getDaysHeld(startDate, endDate)
    const annualized = Math.pow((1 + cumulativeReturn), (365/daysHeld))

    return (annualized - 1).toFixed(4)
  }

  async calculateProfit(startDate, endDate) {
    return Promise.all(
      this.stocks.map(async ({ symbol, stock_quantity: quantity }) => {
        const { error, response } = await this.requestStockPrices({
          symbol,
          startDate,
          endDate
        })

        if (error?.status === "error") throw Error(error?.message)

        return {
          quantity,
          startPrice: response?.startDatePrice,
          endPrice: response?.endDatePrice
        }
      })
    ).then(response => {
      const initialValue = 0
      const initialBalance = response.reduce(this.calculateInitialBalance, initialValue)
      const currentBalance = response.reduce(this.calculateCurrentBalance, initialValue)

      const profit = this.calculateTotalProfit(initialBalance, currentBalance)
      const periodReturn = this.calculatePeriodReturn(initialBalance, currentBalance)
      const annualizedReturn = this.calculateAnnualizedReturn(startDate, endDate, periodReturn)

      return {
        profit,
        annualizedReturn
      }
    }).catch(error => {
      console.error(error)
    })
  }

  async profit(startDate, endDate) {
    const { profit, annualizedReturn } = await this.calculateProfit(startDate, endDate)

    console.log('TOTAL Profit: 💰 ', convertToUSD(profit))
    console.log('ANNUALIZED Return: 🚀 ', annualizedReturn)
  }
}

export default Portfolio
