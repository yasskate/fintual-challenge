## Fintual challenge🏅 
   Construct a simple Portfolio class that has a collection of Stocks and a “Profit”
   method that receives 2 dates and retuns the profit of the Portfolio between those dates.
   Assume each Stock has a “Price” method that receives a date and returns its price.

### Step by step 👣 
  1. Construct a simple Portfolio class 💼 

    a. That has a collection of Stocks
    b. And a “Profit” method

  2. The "Profit" method 🤑 

    b. It'll be able to receives 2 dates
    c. The method will retuns the profit of the Portfolio between those dates

  3. Each Stock has a “Price” method 💰 

    a. The method receives a date
    b. The method returns the stock price

  S. Bonus Track 🔥 

    - Make the Profit method return the “annualized return” of the portfolio between the given dates

### Runing the project 🚀
1. Download the repo ⬇️

```bash
$ git clone git@github.com:yasskate/fintual-challenge.git
```

2. Start project 🔄 

```bash
$ cd fintual-challenge && npm run server
```

**Voilá! It's running**

`Note: It's needed to have Node installed in order to run this project, it runs on your web browser 🌎`

### Attention 👁
**The outputs will be shown on the developer tools of your web browser, so make sure you have it opened**


### Stock prices
- We're going to implement [Twelve Data Stocks API](https://twelvedata.com/stocks) in order to retrieve the stock prices

- For this case I've commited my private key just because the limit request restrictions of the Twelve Data API are 8 requests per minute, so ... it's enought 🆓 

- You are able to create your own account and get your own private key on Twelve Data API if it doesn't work properly

### How to try by myself? 
Well ... once you have the project running on your local environment and your own key (you'll need to replace it btw)

1. Go to `stocks.json` file:
  - if you want to update the portfolio values

2. Go to `index.js` file:
  - if you want to update the `start date` and `end date` values
  - if you want to see how the portfolio is instantiated

3. Go to `portfolio.js` file:
  - if you want to know how the `profit` and the `annualized return` are calculated

4. Go to `stock.js` file:
  - if you want to know how the `stock price` is retrieved

5. Go to `api.js` file:
  - if you want to update your `private key`

6. Go to `utils.js` file:
  - if you want to see usefull calculations for this exercise

