import React, { Component } from "react";
import style from './TodoItem.module.css'


class TodoItem extends Component {
  render() {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {id, title, completed} = this.props.todo
    return (
      <li className={style.item}>
        <input type="checkbox"  checked={completed}
        onChange={()=>this.props.handleChangeProps(id)}
        className={style.checkbox} />
        <span style={completed? completedStyle : null}>
            {title}
        </span>
        <button onClick={()=>this.props.handleDelete(id)}>Delete</button>

      </li>
    );
  }
}
export default TodoItem;
