import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/styles'


export default function Jumbotron() {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       Rona Rebound
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
         Predict what your current investment will be if stock prices return back to pre pandemic prices.
      </Typography>
    </Container>
  )
}
