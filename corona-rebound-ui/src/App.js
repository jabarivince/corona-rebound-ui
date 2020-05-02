import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import axios from 'axios';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Rona Rebound
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
   root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
    margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const HOSTNAME = 'https://corona-rebound.herokuapp.com/api/v1/stocks';

export default function App() {
  const classes = useStyles();
  const [ticker, setTicker] = useState(undefined);
  const [investment, setInvestment] = useState(undefined);
  const [switchLabel, setSwitchLabel] = useState('Shares')
  const [switchChecked, setSwitchChecked] = useState(false);
  const [daysBeforePandemic, setDaysBeforePandemic] = useState(0);
  const [data, setData] = useState(undefined);

  const submitData = async () => {

    const payload = {
      ticker: ticker.trim(),
      investment: investment,
      days_before_pandemic: daysBeforePandemic,
      investment_type: switchChecked ? 'dollars' :'shares'
    }

    const response = await axios.post(HOSTNAME, payload);
    setData(response.data);
  }

  const handleSwitchChange = (value) => {
    setSwitchChecked(value)
    if (value) {
      setSwitchLabel('Money')
    } else {
      setSwitchLabel('Shares')
    }
    
  }

  const marks = [
  {
    value: 0
  },
  {
    value: 2
  },
  {
    value: 4
  },
  {
    value: 6
  },
  {
    value: 8
  }
];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Rona Rebound
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Shop
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         Rona Rebound
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
           Predict what your current investment will be if stock prices return back to pre pandemic prices.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <div >

      <FormControl>
      <FormControlLabel
        control={
          <Switch
            onChange={(event, value) => handleSwitchChange(value)}
            defaultChecked={switchChecked}
            name="checkedB"
            color="primary"
          />
        }
        label={switchLabel}
      />
    </FormControl>
    <br/>
    <br/>

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
             disabled={!switchChecked}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            onChange={e => setInvestment(e.target.value)}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Money to Invest</FormHelperText>
        </FormControl>

          <FormControl className={clsx(classes.margin, classes.withoutLabel)}>
            or

          </FormControl>
            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)} >
          <Input
            disabled={switchChecked}
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            onChange={e => setInvestment(e.target.value)}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Amount of Shares</FormHelperText>
        </FormControl>

        


  
        

</div>
      {/* <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'Ticker',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Ticker</FormHelperText>

          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl> */}
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

       <Button variant="contained" color="primary" onClick={submitData}>
        Submit
      </Button>
        <br/>
        <br/>
        <Typography id="discrete-slider-always" gutterBottom hidden={!data}> ${data?.ticker} currently cost ${data?.current_price}. {daysBeforePandemic > 0 ? data?.days_before_pandemic + ' days before' : 'Before'} the pandemic it was at ${data?.before_price}</Typography>
       <Typography id="discrete-slider-always" gutterBottom hidden={!data}> Your projected amount is: ${data?.projected_investment} with a percent change of {data?.percent_change * 100}%</Typography>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        {/* <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}