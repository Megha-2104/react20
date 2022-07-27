import React from 'react'

// function Greet() {
//     return <h1>Hello Basu </h1>
// }

const Greet = (props) =>{
const { name, movie} = props    
    
    return (
        <div>
    <h1>Hello { name } a.k.a { movie }</h1> 
    {/* {props.children}    */}
    </div>
    )
}


export default Greet

