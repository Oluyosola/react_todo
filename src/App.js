import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {


  // import logo from './logo.svg';

// function App() {
  state = {
    todos: [
      {
      id: 1,
      title: 'Take out trash',
      completed: True
      },
      {
        id: 2,
        title: 'Take your bath',
        completed: False
        },
        {
          id: 3,
          title: 'Sleep',
          completed: True
          }
    ]
  }

  render() {
      return (
        <div className="App">
          <Todos todos={this.state.todos} />
          {/* <h1>App</h1> */}
          
        </div>
      );
    }
      
  }


export default App;
