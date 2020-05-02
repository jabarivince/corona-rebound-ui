import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Slider from "@material-ui/core/Slider";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import APIService from '../../services/APIService'

import useStyles from '../../styles/styles'
import clsx from 'clsx';

export default function Form() {
  const classes = useStyles();
  const [ticker, setTicker] = useState(undefined);
  const [investment, setInvestment] = useState(undefined);
  const [daysBeforePandemic, setDaysBeforePandemic] = useState(0);
  const [data, setData] = useState(undefined);

  const apiService = new APIService()

  const marks = [
    { value: 0 },
    { value: 2 },
    { value: 4 },
    { value: 6 },
    { value: 8 }
  ];

  const SubmitButton = () => {
    const submitData = () => {
      apiService.submit({
        ticker: ticker.trim(),
        investment: investment,
        days_before_pandemic: daysBeforePandemic
      })
      .then(setData)
    }

    return (
      <div>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
        <br/>
        <br/>
      </div>
    )
  }

  const Summary = () => {
    return (
      <div>
        <Typography id="discrete-slider-always" gutterBottom hidden={!data}> ${data?.ticker} currently cost ${data?.current_price}. {daysBeforePandemic > 0 ? data?.days_before_pandemic + ' days before' : 'Before'} the pandemic it was at ${data?.before_price}</Typography>
        <Typography id="discrete-slider-always" gutterBottom hidden={!data}> Your projected amount is: ${data?.projected_investment} with a percent change of {data?.percent_change * 100}%</Typography>
      </div>
    )
  }

  return (
    <Container maxWidth="md" component="main">

      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            onChange={e => setTicker(e.target.value)}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Ticker</FormHelperText>
      </FormControl>

      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-weight"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            onChange={e => setInvestment(e.target.value)}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Money to Invest</FormHelperText>
      </FormControl>

    <Typography id="discrete-slider-always" gutterBottom>Days before pandemic</Typography>

    <Slider
      defaultValue={0}
      aria-labelledby="discrete-slider-always"
      onChange={(e, value) => setDaysBeforePandemic(value)}
      step={2}
      max={8}
      marks={marks}
      valueLabelDisplay="on"
    />

      <SubmitButton />
      <Summary />
    </Container>
  )
}
