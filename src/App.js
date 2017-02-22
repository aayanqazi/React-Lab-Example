import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)  {
    super(props)
    this.state={current:0}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment(){
    this.setState({
      current:this.state.current+1
    })
  }
    decrement(){
    this.setState({
      current:this.state.current-1
    })
  }
  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h1 style={{color:this.props.heading}}>{this.state.current}</h1>
        
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        </div>
    );
  }
}

export default App;
