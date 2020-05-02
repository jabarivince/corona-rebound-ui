import axios from 'axios'
import NASDAQ from '../data/NASDAQ'
import NYSE from '../data/NYSE'

const URL = 'https://corona-rebound.herokuapp.com/api/v1/stocks'

const exchanges = [ ...NASDAQ, ...NYSE ].map(listing => {
  return {
    symbol: listing.Symbol,
    description: listing.Description.toLowerCase()
  }
})

export default class APIService {
  async submit(data) {
    return axios.post(URL, {
      ticker: data.ticker,
      investment: data.investment,
      days_before_pandemic: data.daysBeforePandemic,
      investment_type: 'dollars'
    })
    .then(response => response.data)
  }

  search(term) {
    const t = term.toLowerCase()
    const results = exchanges.filter(listing => listing.symbol.includes(t))

    if (results > 10) {
      results.length = 10
    }

    return results
  }

  dummyRequest() {
    return axios.get(URL).then(response => response.data)
  }
}
