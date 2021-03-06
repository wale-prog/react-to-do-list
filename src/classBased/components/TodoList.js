/* eslint-disable */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleChangeProps={this.props.handleChangeProps}
            handleDelete={this.props.handleDelete}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
