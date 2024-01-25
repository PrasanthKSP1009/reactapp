import React, {Component} from "react";
class StateComponent extends Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }
    }
    changeState = () =>{
        console.log("Kongu Engineerining College")//useState should be used when we come to hooks.
    }
    render(){
        return(
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name}<br></br> This is {this.state.course} class</h2>
                <h3>I am changing the state of the {this.state.name} to {this.changeState()}</h3>
                <button onClick={this.changeState}>Click me to Change the State</button>
            </div>
        )
    }
}
export default StateComponent;

//npm i react-router-dom 
