import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        message: 'hello world'
}
}

  
  render() {
    return (
      <div>
        <h1>{this.state.message}!</h1>
      </div>
    )
  }
}
