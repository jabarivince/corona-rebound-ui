import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import DonateButton from '../Donate/Donate'

import useStyles from '../../styles/styles'

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Rona Rebound
        </Typography>

        <nav>
          <DonateButton />
          </nav>
      </Toolbar>
    </AppBar>
  )
}
