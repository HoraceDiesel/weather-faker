module.exports = (data) => {
    return {
      city: data.location.city,
      forecast: [
        ...data.item.forecast
      ]
    }
  }
