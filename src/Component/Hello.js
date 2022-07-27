import React from 'react'

const Hello = () => {
    return(
         <div id= 'Hello' className= 'dummy class'>
            <h1>
                Hello Vishwas
            </h1>
         </div>

          
    )

    // return React.createElement('div', {id: 'hello', className: 'dummy class'}, 
    // React.createElement('h1', null, 'Hello Vishwas'))
}
export default Hello 