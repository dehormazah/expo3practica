import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import MiniForm from './MiniForm';

class App extends Component {
  
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <div>
        <MiniForm question_id=""/>
        <List question_id="" /> 
      </div>
    );
  }
}

export default App;
