
export const convertToUSD = money => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);
  }

export const addDay = date => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + 1)

  const formatdDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: 'UTC'
  }).format(newDate)

  return formatdDate.replaceAll('/', '-')
}

export const getDaysHeld = (startDate, endDate) => {
 const initialDate = new Date(startDate)
 const lastDate = new Date(endDate)

  const dayDifference = (lastDate.getTime() - initialDate.getTime())
  return (Math.ceil(dayDifference / (1000 * 3600 * 24)))
}

