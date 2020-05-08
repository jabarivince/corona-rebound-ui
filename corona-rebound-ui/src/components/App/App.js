import Form from '../Form/Form'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'
import React, { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Jumbotron />
      <Form />
    </Fragment>
  );
}
