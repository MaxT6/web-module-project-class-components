import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


const todos = [];

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    } // sets state of todo list 
    console.log('this', this)
  }

  addTodo = (e, item) => {
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [
        ...this.state.todos, //copies the current list of todos in state
        newTodo //adds newTodo to state
      ]
    })
  }

  hideCompleted = (e) => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  showCompleted = (e) => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed)
    })
  }

  toggleTodo = (itemID) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(itemID === item.id) {
          return {
            ...item,
            completed: !item.completed //toggles completed status of todo item
          }
        } return item;
      })
    }) 
  }

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} // Passes state of todos to TodoList
          toggleTodo={this.toggleTodo}
          />
        <Form 
          addTodo={this.addTodo}
        />
        <button
          onClick={this.hideCompleted}>
            Hide Completed
        </button>
        <button
          onClick={this.showCompleted}>
            Show Completed
        </button>
      </div>
    )
  }
}
