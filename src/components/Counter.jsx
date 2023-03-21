import React from "react";

class Counter extends React.component {
    constructor(props) {
        super(props);
        this.state = {   // состояние нашего компонента  
            count: 0
        }    
       }

       increment() {
        this.setState({
            count: this.state.count ++ 
        })
       }

       decrement() {
        if(this,state.count < 0) {
            this.setState({
                count: this.state.count --
            })
        } else if(this.state.count === 0) {
            this.set.state({
                count: this.state.count
            })
        }
       }

       render() {
        return <React.Fragment>
            <h2 title="hello">{this.state.count}</h2>
            <button onClick={() => {this.decrement()}}> - </button>
            <button onClick={() => {this.increment()}}> + </button>
        </React.Fragment>
       }
    }

    export default Counter;