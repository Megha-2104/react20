import React, { Component } from 'react'
import './App.css';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/UserContext';



class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Megharaj">
           <ComponentC /> 
        </UserProvider>
       
       
      </div>
    ) 
   }
}

export default App;
