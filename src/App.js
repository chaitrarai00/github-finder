import './App.css';
import React, {Component,Fragment} from 'react';

class App extends Component{
  
  render(){
    const name='Chai';
    const loading=false;
    const showname=false;

  return(
  <div className='App'>
    <h1>The app</h1>
    {loading?<h4>Loading....</h4>:<h1>Hii {showname && name}</h1>}
  </div>);
}
}

export default App;
