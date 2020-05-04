import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import DonateButton from '../Donate/Donate'
import useStyles from '../../styles/styles'
import ronaLogo from '../../assets/rona-rebound_256x256.png';

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        <span>
          Rona Rebound  
          </span>
          <img src={ronaLogo} className="App-logo title-brand" alt="logo" width='40px' height='40px'/>
        </Typography>

        <nav>
          <DonateButton />
          </nav>
      </Toolbar>
    </AppBar>
  )
}
