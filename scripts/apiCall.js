import request from 'axios'

const api_call = (city="CA") => {

  const URL = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")&format=json`

  return request({
    method: 'GET',
    url: URL,
    responseType: 'json'
  })
}

export default api_call
