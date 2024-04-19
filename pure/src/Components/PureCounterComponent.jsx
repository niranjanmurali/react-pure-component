import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class PureCounterComponent extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            toggle: true
        }
    }

    changeToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    increaseCount = () => {
        const { toggle } = this.state;
        this.setState({
            count: toggle ? this.state.count + 1 : this.state.count
        });
    }

  render() {
    return (
      <div><hr />
      <h1>Pure Component</h1>
      <h3>{this.state.count}</h3>
      <button onClick={this.changeToggle} style={{ backgroundColor: this.state.toggle ? "green" : "red" }}>Toggle</button>
      <button onClick={this.increaseCount}>Counter</button>
      <hr /></div>
    )
  }
}