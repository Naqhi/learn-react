import React from 'react'
import App from '../App'

// function Greet(){
//     return <h1>hello naqhi</h1>
// }

// const Greet = () => <h1>hello naqhi</h1>

// export default Greet;

//  export const Greet = () => <h1>hello naqhi</h1> // name export    

const Greet = (props) => {  //props
    console.log(props);
   return ( 
   <div>
    <h1>
        hello {props.name}            
    </h1> 
        {props.children}
    </div>

   )
}


export default Greet;
 