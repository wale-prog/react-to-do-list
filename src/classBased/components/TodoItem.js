import React, { Component } from "react";
import style from "./TodoItem.module.css";

class TodoItem extends Component {

    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdateDone = (event) => {
        if(event.key === "Enter") {
            this.setState({
                editing: false,
            })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }
  
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };  

    const { id, title, completed } = this.props.todo;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
        viewMode.display = "none"
    }else {
        editMode.display ="none"
    }

    return (
      <li className={style.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
            className={style.checkbox}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
          <button onClick={() => this.props.handleDelete(id)}>Delete</button>
        </div>
        <input type="text"
        style={editMode}
        className={style.textInput}
        value={title}
        onChange={(event)=>{
            this.props.setUpdate(event.target.value, id)
        }}
        onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}
export default TodoItem;
