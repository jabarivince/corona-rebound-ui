import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/styles'
import ronaLogo from '../../assets/rona-rebound_256x256.png';


export default function Jumbotron() {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       Rona Rebound
       <br/>
       <img src={ronaLogo} className="App-logo title-brand" alt="logo" width='100px' height='100px'/>
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
         What will your investment today grow to if stocks <strong>rebound</strong> to pre-pandemic prices?
      </Typography>
    </Container>
  )
}
