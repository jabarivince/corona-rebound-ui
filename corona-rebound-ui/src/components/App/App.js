import Copyright from '../Copyright/Copyright'
import CssBaseline from '@material-ui/core/CssBaseline'
import Form from '../Form/Form'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'
import React, { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Jumbotron />
      <Form />
      <Copyright />
    </Fragment>
  );
}
