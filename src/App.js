import './App.css';
import React, {Component,Fragment} from 'react';

class App extends Component{
  func = () => 'function from class'
  
  render(){
    const name='Chai';
    const foo= () => 'function from method'
  return <div className='App'>
    <h1>Access constant {name}</h1>
    <h1>Access functions here : {foo()}: {this.func()}</h1>
  </div>;
}
}

export default App;
