import React, { Component } from 'react';

import {
  Jumbotron,
  Button
} from 'react-bootstrap';

const Home = () => {

  const jumbotronInstance = (
    <Jumbotron>
      <h1 className='text-center'>Welcome Home</h1>
      <p className='text-center'>Have a nice day</p>
      <p className='text-center'>If you have any problem</p>
      <p className='text-center'><b>Feel free to discuss with me.</b></p>
      <p className='text-center'>or you can <a href='https://github.com/madeinfree/react-basic-starter/issues'>Here</a> to tell me :>.</p>
    </Jumbotron>
  );

  return (
    <div>
      { jumbotronInstance }
    </div>
  )
}

export default Home;
