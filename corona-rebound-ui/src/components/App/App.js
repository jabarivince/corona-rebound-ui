// import Copyright from '../Copyright/Copyright'
import CssBaseline from '@material-ui/core/CssBaseline'
import Form from '../Form/Form'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'
import Ad from '../Ad/Ad';
import React, { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Jumbotron />
      <Form />
      <Ad/>
    </Fragment>
  );
}
