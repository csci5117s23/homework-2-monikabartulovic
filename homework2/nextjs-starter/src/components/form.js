import React, { useState } from "react";
import { set } from "react-hook-form";

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // if(!name.value){
        //     alert("NO!")
        // }
        // else{
        props.addTask(name);
        setName("");
    // }
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
