import React from 'react'

import { connect } from 'react-redux'
import {
  completeTodo
} from '../../actions/todos'

import {
  Jumbotron
} from 'react-bootstrap'

const todos = (props) => (
  props.todos.map((todo, index) => (
    <span key={ `todo-${index}` }>
      <p className='text-center'>
        Text: { todo.text }, Completed: { todo.completed ? 'yes' : 'no' }
        { ' ' }
        <button className='btn btn-sm btn-success' onClick={ props.completeTodo }>Click to changed completed.</button>
      </p>
    </span>
  ))
)

const Home = (props) => {
  const jumbotronInstance = (
    <Jumbotron>
      <h1 className='text-center'>Welcome Home</h1>
      <p className='text-center'>Have a nice day</p>
      <p className='text-center'>If you have any problem</p>
      <p className='text-center'><b>Feel free to discuss with me.</b></p>
      <p className='text-center'>or you can <a href='https://github.com/madeinfree/react-basic-starter/issues'>Here</a> to tell me :>.</p>
      <hr />
      <p className='text-center'>TODOS</p>
      { todos(props) }
    </Jumbotron>
  )

  return (
    <div>
      { jumbotronInstance }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

const mapDispatchToProps = {
  completeTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
