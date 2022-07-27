import React, { Component } from 'react'

class Welcome extends Component {


    render() {
    const {name, movie} =this.props 
    // const {state1, state2} =this.state  
        return <h1>Welcome { name } a.k.a { movie }</h1>
    }
}
export default Welcome