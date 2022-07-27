import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
     // Finally in the render method we will extract
    // count from the state and include in the jsx 
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}>Clicked {count} Times</button>
    }
}

export default ClickCounterTwo