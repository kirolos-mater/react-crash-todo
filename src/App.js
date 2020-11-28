import React, {Component} from 'react';
// import logo from './logo.svg';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';

class App extends Component{

  state = {
    todos: [
      {
        id: Math.floor(Math.random() * 1000000000),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        title: 'Meeting with boss',
        completed: false,
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000000),
      title,
      completed: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header style={headerStyle} />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo}
          />
        </div>     
      </div>
    );
  }

}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default App;
