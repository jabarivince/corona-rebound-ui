import axios from 'axios'
import NASDAQ from '../data/NASDAQ'
import NYSE from '../data/NYSE'

const URL = 'https://corona-rebound.herokuapp.com/api/v1/stocks'

const exchanges = [ ...NASDAQ, ...NYSE ].map(listing => {
  return {
    symbol: listing.Symbol,
    description: listing.Description
  }
})

export default class APIService {
  get exchanges() {
    return exchanges
  }

  async submit(data) {
    return axios.post(URL, {
      ticker: data.ticker,
      investment: data.investment,
      days_before_pandemic: data.daysBeforePandemic,
      investment_type: 'dollars'
    })
    .then(response => response.data)
  }

  dummyRequest() {
    return axios.get(URL).then(response => response.data)
  }
}
