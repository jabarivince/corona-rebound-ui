import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import APIService from '../../services/APIService'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import useStyles from '../../styles/styles'
import clsx from 'clsx'

const Ticker = (onChange, apiService) => {
  return (
    <Autocomplete
      // style={{ maxWidth: 275 }}
      options={apiService.exchanges}
      getOptionLabel={option => `${option.symbol} ${option.description}`}
      onInputChange={(e, value) => {
        const ticky = value.split(' ')[0]

        onChange(ticky)
      }}
      renderInput={params => <TextField {...params} label="Company" variant="outlined" />}
      renderOption={option => <span>{option.symbol} - {option.description}</span>}
    />
  )
}

const input = (classes, text, onChange, prefix) => {
  return (
    <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
          type='number'
          startAdornment={prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : null }
          aria-describedby="standard-weight-helper-text"
          onChange={e => onChange(e.target.value)}
          inputProps={{ 'aria-label': 'weight', }}
        />
        <FormHelperText id="standard-weight-helper-text">{text}</FormHelperText>
    </FormControl>
  )
}

export default function Form() {
  const classes = useStyles()
  const [ticker, setTicker] = useState(undefined)
  const [investment, setInvestment] = useState(undefined)
  const [daysBeforePandemic, setDaysBeforePandemic] = useState(undefined)
  const [data, setData] = useState(undefined)
  const [shouldHide, setShouldHide] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
  const apiService = new APIService()

  const SubmitButton = () => {
    return (
      <div style={{
        'display': 'flex',
        'justifyContent': 'center',
        'padding': '2%'
      }}>
        <br/>
        <Button variant="contained" color="primary" onClick={() => {
          const isValid = !!ticker && !! investment && !! daysBeforePandemic

          if (!isValid) {
            alert("Please fill out the entire form")
            return
          }

          setShowLoadingSpinner(true)

          apiService.submit({
            ticker: ticker,
            investment: investment,
            daysBeforePandemic: daysBeforePandemic
          })
          .then(setData)
          .then(() => setShowLoadingSpinner(false))
          .then(() => setShouldHide(false))
        }}>
          {showLoadingSpinner ? <LoadingSpinner /> : 'See what you would earn'}
        </Button>
        <br/>
        <br/>
      </div>
    )
  }

  const Summary = () => {
    if (!data || shouldHide) { return null }

    const growth = (data?.percent_change * 100).toFixed(2)
    const profit = (data?.projected_investment - investment).toFixed(2)
    const message = growth >= 0 ?
    (<p>
      Nice! Looks like if you invest ${investment} in {ticker}, if prices <strong>rebound, </strong>
      you will have ${data?.projected_investment} with a profit of ${profit}.
    </p>) :
    (<p>
      Oh no! Maybe investing in {ticker} might not return the profit you were looking for. You
      would lose ${profit * -1}. Don't worry! Try another company.
    </p>)

    const color = growth >= 0 ? 'green' : 'red'

    return (
      <div>
        <div style={{
          paddingLeft: '10%',
          paddingRight: '10%',
        }}>
          {message}
        </div>

        <table align="center" style={{
            borderStyle: 'solid',
            borderWidth: '4px',
            borderColor: color,
            borderRadius: '4px',
            padding: '2%',
        }}>
          <tbody>
            <tr><td>Projected value:</td><td>${data?.projected_investment}</td></tr>
            <tr><td>Profit:</td><td>{growth < 0 ? `-$${(-1 * profit)}` : `$${profit}`}</td></tr>
            <tr><td>Current stock price:</td><td>${data?.current_price}</td></tr>
            <tr><td>Previous stock price:</td><td>${data?.before_price}</td></tr>
            <tr><td>Growth (%):</td><td>{growth}%</td></tr>
          </tbody>
        </table>
      </div>
    )
  }

  const f = (g) => {
    return (v) => {
      g(v)
      setShouldHide(true)
    }
  }

  const Rows = [
    { title: 'Initial Investment', content: input(classes, null, f(setInvestment), '$') },
    { title: 'Company', content: Ticker(f(setTicker), apiService) },
    { title: 'Days before pandemic', content: input(classes, 'COVID-19 pandemic officially began 3/11/20', f(setDaysBeforePandemic)) },
  ].map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.title}:</td>
        <td>{value.content}</td>
      </tr>
    )
  })

  return (
    <Container maxWidth="md" component="main">
      <table align="center" style={{ 
        borderSpacing: '16px', 
        maxWidth: '100%',
        tableLayout: 'fixed'
        }}>
        <tbody>
          { Rows }
        </tbody>
      </table>

      <SubmitButton />
      <Summary />
    </Container>
  )
}
