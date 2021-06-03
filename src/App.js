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
      completed: true
      },
      {
        id: 2,
        title: 'Take my bath',
        completed: false
        },
        {
          id: 3,
          title: 'Sleep',
          completed: true
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
