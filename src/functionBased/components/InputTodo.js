import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputTitle, setInputTitle] = useState({
    title: "",
  });

  const onChange = (event) => {
    setInputTitle({
      ...inputTitle,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputTitle.title.trim()) {
      props.addTodoProps(inputTitle.title);
      setInputTitle({
        title: "",
      });
    } else {
      alert("Please write an item");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputTitle.title}
        onChange={onChange}
        name="title"
      />
      <button className="input-submit">
        <FaPlusCircle
        style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} 
        />
      </button>
    </form>
  );
};
export default InputTodo;
