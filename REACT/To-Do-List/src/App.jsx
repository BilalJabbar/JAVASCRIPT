import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState, useRef, useEffect  } from "react";
import { nanoid } from "nanoid";


const usePrevious = (value) =>{
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}



//for the filter buttons
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {

  const [tasks, setTasks] = useState(props.tasks)
  const [count, setCount] = useState(3)
  const nId = nanoid()

  //hook for the filter buttons
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `todo-${nId}`, name, completed: false };
    
    setTasks([...tasks, newTask]);
    setCount(count+1)
  }


  const toggleTaskCompleted =(id)=> {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    
  }
  
  const deleteTask =(taksId) =>{

    const newArrAfterDel = tasks.filter((task) => taksId !== task.id)
    setTasks(newArrAfterDel)
    setCount(count-1)
   
  }

  const editTask= (id, newName) => {
    //console.log('ID:',id,"Name:",newName)
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // Copy the task and update its name
        return { ...task, name: newName };
      }
      // Return the original task if it's not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }
  
  

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

 const filterList = FILTER_NAMES.map((name) => (
  <FilterButton 
  key={name}
  name={name}
  isPressed={name === filter}
  setFilter={setFilter}
  />
));

const listHeadingRef = useRef(null);
const prevTaskLength = usePrevious(tasks.length);
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      
       
       
      </div>
   
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{count} { count <= 1 ? "task":"tasks"} remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
     

      </ul>
    </div>
  );
}

export default App;
