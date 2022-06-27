/*
Fintual challenge 🏅 
   Construct a simple Portfolio class that has a collection of Stocks and a “Profit”
   method that receives 2 dates and retuns the profit of the Portfolio between those dates.
   Assume each Stock has a “Price” method that receives a date and returns its price.

Step by step 👣 
  1. Construct a simple Portfolio class 💼 
    a. That has a collection of Stocks
    b. And a “Profit” method

  2. The "Profit" method 🤑 
    b. It'll be able to receives 2 dates
    c. The method will retuns the profit of the Portfolio between those dates

  3. Each Stock has a “Price” method 💰 
    a. The method receives a date
    b. The method returns the stock price.

  S. Bonus Track 🔥 
    - Make the Profit method return the “annualized return” of the portfolio between the given dates.
 */

import Portfolio from './Portfolio.js'
import stocks from './stocks.json' assert { type: "json" }

// DATE_FORMAT = "yyyy-mm-dd"
const START_DATE = "2020-05-29"
const END_DATE = "2021-05-29"

const portfolio = new Portfolio(stocks)

portfolio.profit(START_DATE, END_DATE)
