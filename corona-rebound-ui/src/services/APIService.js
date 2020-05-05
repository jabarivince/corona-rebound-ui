import axios from 'axios'
import NASDAQ from '../data/NASDAQ'
import NYSE from '../data/NYSE'

const URL = 'https://corona-rebound.herokuapp.com/api/v1/stocks'

const exchanges = [ ...NASDAQ, ...NYSE ]
.map(listing => {
  return {
    symbol: listing.Symbol.replace('.', '-'),
    description: listing.Description
  }
})

export default class APIService {
  static didFireDummyRequest = false

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
    .catch(error => alert('Oops! Something went wrong'))
  }

  dummyRequest() {
    if (APIService.didFireDummyRequest) {
      return Promise.resolve()
    }

    APIService.didFireDummyRequest = true

    return axios.post(URL).then(response => response.data)
  }
}
