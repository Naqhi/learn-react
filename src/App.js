import logo from './logo.svg';
import './App.css';
import Greet  from './components/greet'; // name export  
import Welcome from './components/welcome';
import Hello from './components/hello';
import { Component } from 'react';
import Message from './components/messgae';
import Send from './components/send';

// function App() {
//   return (
//     <div className="App">
//       {/* <Hello /> */}
//         <Greet / >
//        {/* <Welcome /> */ }
//     </div>
//   );
// }


 class App extends Component{
  render (){
    return (
      <div className="app">
        {/* <Message /> */}
        <Send/>
        {/* <Greet name= "naqhi" >
          <p>this is web developer</p></Greet> 
        <Greet name= "hakeem" > </Greet>
        <Greet name= "nizam" > </Greet>
        <Welcome name= "hakeem" />
        <Welcome name= "nizam" /> */}
         
      </div>
    )
  }
 }
export default App;
