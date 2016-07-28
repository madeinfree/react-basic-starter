import React from 'react'

import {
  Jumbotron
} from 'react-bootstrap'

const Welcome = () => {
  const jumbotronInstance = (
    <Jumbotron>
      <h1 className='text-center'>Welcome Reactjs Basic Starter</h1>
      <p className='text-center'>This is the reactjs basic structure starter for user initial the project.</p>
      <p className='text-center'>When success, you can see this [Home] page.</p>
      <p className='text-center'><b>Provide</b></p>
      <p className='text-center'>React, ReactRouter, ReactBootstrap, Redux</p>
      <p className='text-center'>Webpack-dev-server</p>
    </Jumbotron>
  )

  return (
    <div>
      { jumbotronInstance }
    </div>
  )
}

export default Welcome
