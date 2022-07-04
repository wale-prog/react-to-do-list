import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.completed}
        onChange={()=>this.props.handleChangeProps(this.props.todo.id)} />{" "}
        {this.props.todo.title}
        <button onClick={()=>this.props.handleDelete(this.props.todo.id)}>Delete</button>
      </li>
    );
  }
}
export default TodoItem;
