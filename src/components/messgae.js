import React,{ Component } from 'react';

class Message extends Component{
     constructor (){
        super()
        this.state ={
            Message :'welcome visitors'
        }
     }

     changeMessage(){
        this.setState({
            Message: 'thank you for subscribing'
        })
     }


    render(){
         return(
            <div>
            <h1>{this.state.Message}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
         ) 
         
         
    }
}

export default Message