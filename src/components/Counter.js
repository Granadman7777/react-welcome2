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
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonIncrement = React.createElement('button', { onClick: () => {this.increment}}, '+');
        const buttonDecrement = React.createElement('button', {onclick: () => {this.decrement}}, '-');
        return React.createElement(React.Freagment, null, h2, buttonDecrement, buttonIncrement); //обвертка
        return h2;
       }
    }

    export default Counter;