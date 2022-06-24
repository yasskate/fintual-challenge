/*
 Challenge:
   Construct a simple Portfolio class that has a collection of Stocks and a “Profit”
   method that receives 2 dates and retuns the profit of the Portfolio between those dates.
   Assume each Stock has a “Price” method that receives a date and returns its price.

🏅 Challenge:
 1. Construct a simple Portfolio class 💼 
  a. That has a collection of Stocks
  b. And a “Profit” method

2. The "Profit" method 🤑 
  b. it'll be able to receives 2 dates
  c. the method will retuns the profit of the Portfolio between those dates

 3. Each Stock has a “Price” method 💰 
  a. the method receives a date
  b. the method returns the stock price.

 S. 🔥  Bonus Track:
    make the Profit method return the “annualized return” of the portfolio between the given dates.
 */

// import Api from './api.js'
import Stock from './stock.js'
import stocks from './stocks.json' assert { type: "json" }

// class Portfolio extends Api {
class Portfolio {
  constructor(props) {
    const { stocks } = props
    this.stocks = stocks
  }

  getSymbols() {
    return this.stocks.map(stock => stock.symbol).join(',')
  }

  convertToUSD(money) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);
  }

  async calculateProfit(startDate, endDate) {
    let acc = 0
    
    return Promise.all(
      this.stocks.map(async ({ symbol, stock_quantity: stockQuantity }) => {
        const stock = new Stock({ symbol })
        const stockPrice = await stock.price(startDate, endDate)
        const profit = (Number(stockPrice.close) * stockQuantity).toFixed(2)

        console.log('price close >>> ', stockPrice.close, '| quantity >>>', stockQuantity)
        console.log('profit >>> ', profit)
        return profit
      })
    ).then((response) => {
      let initialProfit = 0
      const totalProfit = response.reduce((previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue)

      , initialProfit)

      console.log('After calculate profit: 🥊 ', totalProfit)
      console.log('After calculate profit: 🥊 ', this.convertToUSD(totalProfit))

      return totalProfit
    })
  }

  async profit(startDate, endDate) {
    const accumulatedProfit = await this.calculateProfit(startDate, endDate)
    // console.log('PROF  >>>>> ', accumulatedProfit)
    // console.log('After calculate profit: 🥊 ', this.convertToUSD(accumulatedProfit))
    return this.convertToUSD(accumulatedProfit)
  }
}

// const START_DATE = "2022-06-23"
// const END_DATE = "2022-06-24"
// const portfolio = new Portfolio(stocks)

const START_DATE = "2020-05-09"
const END_DATE = "2021-04-09"

const portfolio = new Portfolio({
  stocks: [
    {
      symbol: "AAPL",
      stock_quantity:  2
    },
    {
      symbol: "AMZN",
      stock_quantity: 2
    },
    {
      symbol: "NFLX",
      stock_quantity: 2
    }
  ]
})
portfolio.profit(START_DATE, END_DATE)













// const XMLHttpRequest = require('xhr2');
// global.XMLHttpRequest = require('xhr2');
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }





// portfolio.profit()


// const fetch = require('node-fetch')

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c8bd1f3a58mshbdebfd452007b9bp189f12jsn18951a824d2c',
// 		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
// 	}
// };

// fetch('https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
