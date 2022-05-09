import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(){
    super()
    console.log('PROP THIS', this)
  }
  
  render() {

    return (
      <div> 
        {this.props.todos.map(item => (
          <Todo 
          toggleTodo={this.props.toggleTodo}
          key={item.id}
          item={item}
          />
          // map takes array of todos recevied in props and passes each object to Todo with the label of item
        ))}
        
      </div>
    )
  }
}
