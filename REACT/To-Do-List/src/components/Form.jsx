import React from 'react'
import { useState } from 'react';

const Form = (props) => {

  const [name, setName] = useState("")

  const handleOnChange = (e) =>{
    
    setName(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      props.addTask(name);
      setName("");
    } else {
      // Display an error message or handle empty input case as per your requirement
      alert("Error")
    }
    setName("");
   
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleOnChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form