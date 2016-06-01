import React from 'react';

import { connect } from 'react-redux';

import {
  Jumbotron
} from 'react-bootstrap';

const Home = (props) => {
  const jumbotronInstance = (
    <Jumbotron>
      <h1 className='text-center'>Welcome Home</h1>
      <p className='text-center'>Have a nice day</p>
      <p className='text-center'>If you have any problem</p>
      <p className='text-center'><b>Feel free to discuss with me.</b></p>
      <p className='text-center'>or you can <a href='https://github.com/madeinfree/react-basic-starter/issues'>Here</a> to tell me :>.</p>
      < hr />
      <p className='text-center'>TODOS</p>
      <p className='text-center'>Name: { props.todos.name }, Gender: { props.todos.gender }</p>
    </Jumbotron>
  );

  return (
    <div>
      { jumbotronInstance }
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
);

export default connect(
  mapStateToProps
)(Home);
