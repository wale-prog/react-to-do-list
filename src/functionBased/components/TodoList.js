/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((item) => (
      <TodoItem
        key={item.id}
        todo={item}
        handleChangeProps={props.handleChangeProps}
        handleDelete={props.handleDelete}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodoList;
