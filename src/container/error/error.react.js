import React, { Component } from 'react'

class Error extends Component {
  constructor() {
    super();

    this.state = {
      errorInfo: ''
    }
  }

  componentDidCatch(error, info) {
    // this.setState(state => {
    //   return {
    //     errorInfo: info.componentStack
    //   }
    // })
  }

  render() {
    return (
      <div>
        Component Did Catch Try
        <CrashComponent />
      </div>
    )
  }
}

class CrashComponent extends Component {
  constructor() {
    super();
  }

  render() {
    // setTimeout(() => {
      throw new Error('Im crash now.')
    // }, 2000)
    return null
  }
}

export default Error
