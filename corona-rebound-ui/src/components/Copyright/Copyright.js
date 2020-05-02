import React from 'react'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from '../../styles/styles'

export default function Copyright() {
  const classes = useStyles()

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Box mt={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" >
          Rona Rebound
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
    </Container>
  )
}
