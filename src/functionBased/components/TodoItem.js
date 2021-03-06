/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { id, title, completed } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={style.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
          className={style.checkbox}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button onClick={() => props.handleDelete(id)}>
          <FaTrash
            style={{ color: 'orangered', fontSize: '16px' }}
          />
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={style.textInput}
        value={title}
        onChange={(event) => {
          props.setUpdate(event.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
export default TodoItem;
