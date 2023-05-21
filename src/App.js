import './App.css';
import React, {Component,Fragment} from 'react';

class App extends Component{
  render(){
  return React.createElement('div',{className: 'App'},React.createElement('h1',null,'React code without jsx and pure JS!'));
}
}

export default App;
