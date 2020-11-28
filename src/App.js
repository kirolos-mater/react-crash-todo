import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import axios from 'axios';
import './App.css';

class App extends Component{

  state = {
    todos: [

    ]
  }

  componentDidMount() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos: res.data,
    }))
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
      <Router>
        <div className="App">
          <div className="container">
            <Header style={headerStyle} />
            <Route 
              exact path="/" 
              render={() => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos 
                    todos={this.state.todos} 
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )} 
            />
            <Route  
              exact path="/about" 
              component={About}
            />
          </div>     
        </div>
      </Router>
      
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
