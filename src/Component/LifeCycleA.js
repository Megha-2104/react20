import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Megharaj'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
       console.log('LifecycleA getDerivedStateFromProps')
       return null 
    }
 
    componentDidMount() {
     console.log('LifecycleA componentDidMount ')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null  
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')  
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
     
     render() {
        console.log('LifecycleA render')
       return (
        <div>
         <div>LifeCycleA</div>
         <button onClick = {this.changeState}>Change State</button>
         <LifeCycleB />
         </div>
       )
    }
    }



export default LifeCycleA