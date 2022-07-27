import React, { Component } from 'react'

class HoverComponentTwo extends Component {

  render() {
    // In render() destructure count from this.state
    // and then display it as part of heading
    const { count, incrementCount } = this.props
    return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        
  }
}

export default HoverComponentTwo