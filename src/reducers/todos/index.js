import {
  COMPLETE_TODO
} from './const'

const InitialState = [
  {
    text: 'runing',
    completed: false
  }
]

export const todos = (state = InitialState, action) => {
  switch (action.type) {
  case COMPLETE_TODO:
    return [
      Object.assign({}, state[0], { completed: !state[0].completed })
    ]
  default:
    return state
  }
}
