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

import useStyles from '../../styles/styles'
import clsx from 'clsx'

const Ticker = (onChange, apiService) => {
  return (
    <Autocomplete
      style={{ width: 200 }}
      options={apiService.exchanges}
      getOptionLabel={option => `${option.symbol} ${option.description}`}
      onInputChange={(e, value) => {
        const ticky = value.split(' ')[0]

        onChange(ticky)
      }}
      renderInput={params => <TextField  {...params} label="Company" variant="outlined" />}
      renderOption={option => <span>{option.symbol} - {option.description}</span>}
    />
  )
}

const input = (classes, text, onChange, prefix) => {
  return (
    <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
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

          apiService.submit({
            ticker: ticker,
            investment: investment,
            daysBeforePandemic: daysBeforePandemic
          })
          .then(setData)
        }}>
          See what you would earn
        </Button>
        <br/>
        <br/>
      </div>
    )
  }

  const Summary = () => {
    if (!data) { return null }

    const growth = (data?.percent_change * 100).toFixed(2)

    return (
      <table align="center" style={{
          borderStyle: 'solid',
          borderWidth: '4px',
          borderColor: data?.percent_change >= 0 ? 'green' : 'red',
          borderRadius: '4px',
          padding: '2%',
      }}>
        <tbody>
          <tr><td>Value of shares:</td><td>${data?.projected_investment}</td></tr>
          <tr><td>Current Stock price:</td><td>${data?.current_price}</td></tr>
          <tr><td>Previous stock price:</td><td>${data?.before_price}</td></tr>
          <tr><td>Growth (%):</td><td>{growth}%</td></tr>
        </tbody>
      </table>
    )
  }

  const Rows = [
    { title: 'Initial Investment', content: input(classes, null, setInvestment, '$') },
    { title: 'Company', content: Ticker(setTicker, apiService) },
    { title: 'Days before pandemic', content: input(classes, null, setDaysBeforePandemic) },
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
      <table align="center" style={{ borderSpacing: '16px', }}>
        <tbody>
          { Rows }
        </tbody>
      </table>

      <SubmitButton />
      <Summary />
    </Container>
  )
}
