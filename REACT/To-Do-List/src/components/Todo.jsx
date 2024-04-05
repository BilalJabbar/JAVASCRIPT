import React from 'react'
import { useEffect, useRef, useState } from 'react'

const Todo = (props) => {

  const [isEditing,setEditing] = useState(false)
  const [inputName, setInputName] = useState("")
  const editFileRef = useRef(null)
  const editButtonRef = useRef(null)
  

  // useEffect to render the focus using mouse or keyboard
  const  usePrevious =(value) =>{
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const wasEditing = usePrevious(isEditing);
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFileRef.current.focus();
    } else if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);


  const handleOnChange = (e) =>{
   
    setInputName(e.target.value)
  
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputName.trim() !== "") {
      props.editTask(props.id,inputName)
      
      
    } else {
      // Display an error message or handle empty input case as per your requirement
      alert("No Value Error!")
    }
    setEditing(false);
  }


  const editingTemplate = (
    <form onSubmit={handleSubmit}
    className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for <b>{props.name}</b>
        </label>
        {/* Track the user input and update it after submittion */}
        <input 
        id={props.id} 
        className="todo-text" 
        type="text" 
        name = "text"
        value={inputName}
        onChange={handleOnChange}
        ref={editFileRef}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=>setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit" >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button 
        type="button" 
        className="btn" 
        onClick={()=> setEditing(true)}
        ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  
  //console.log(editButtonRef.current);
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

  // return (
  //   <>
  //       <li className="todo stack-small">
  //         <div className="c-cb">
  //           <input 
  //           id={`todo-${props.id}`} 
  //           type="checkbox" 
  //           defaultChecked ={props.completed} 
  //           onChange={() => props.toggleTaskCompleted(props.id)}
  //            />
  //           <label className="todo-label" htmlFor={`todo-${props.id}`}>
  //             {props.name}
  //           </label>
  //         </div>
  //         <div className="btn-group">
  //           <button type="button" className="btn">
  //             Edit <span className="visually-hidden">{props.name}</span>
  //           </button>
  //           <button type="button" className="btn btn__danger" onClick={ ()=> props.deleteTask(props.id)}>
  //             Delete <span className="visually-hidden">{props.name}</span>
  //           </button>
  //         </div>
  //       </li>
  //   </>
  // )
}

export default Todo