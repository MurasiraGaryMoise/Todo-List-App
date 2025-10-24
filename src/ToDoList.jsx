import { useState } from "react";

function ToDoList(){

  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState("");


  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleAddTask = () => {
    const value = newTask.trim();

    if(value !== ""){
      setTasks(t => [...t,value]);
      setNewTask("")
  }
    }

  

  const handleDelete = (index) => {
    setTasks(tasks.filter((_,i) => i !== index ))
  }

  const handleUpchange = (index) => {
    if (index > 0) {
    const updatedArray = [...tasks];

    [updatedArray[index] , updatedArray[index-1] ] = [ updatedArray[index-1] , updatedArray[index]];

    setTasks(updatedArray)
    }
  }

  const handleDownChange = (index) => {
     if (index < (tasks.length - 1)) {
    const updatedArray = [...tasks];

    [updatedArray[index] , updatedArray[index+1] ] = [ updatedArray[index+1] , updatedArray[index]];

    setTasks(updatedArray)
    }
  }


  return(<>
  
  <div className="todo-list">
    <span className="N_B">N.B: This project is non-responsive</span> <br />
    <span className="N_B">Use a desktop or Laptop when viewing this project</span>
    <h2>To-Do-List</h2>

    <div className="input-box">
      <input type="text" placeholder="Enter task" value={newTask} onChange={handleChange}/>
      <button className="add-button" onClick={() => handleAddTask()}>Add</button>
    </div>


    <ul className="list">
      {/* <li className="item">
        <span className="text">Take out the trash</span>
        <div>
         <button className="delete-button" title="Delete">❌</button>
         <button className="move-buttons" title="Move task up-wards">👆</button>
         <button className="move-buttons" title="Move task down-wards">👇</button>
        </div>
      </li> */}

        <h4 style={{textAlign: "center", margin: 0}}>Tasks</h4>
        {tasks.length === 0 && <p>You currently have nothing to do.</p>}
      {
        tasks.map((task,index) => 
        <li className="item" key={index}>
          <span>{task}</span>
          <div>
            <button className="delete-button" title="Delete" onClick={() => handleDelete(index)}>❌</button>
            <button className="move-buttons" title="Move task up-wards" onClick={() => handleUpchange(index)}>👆</button>
            <button className="move-buttons" title="Move task down-wards" onClick={() => handleDownChange(index)}>👇</button>
          </div>
        </li>)
      }
    </ul>
  </div>
  </>)
}

export default ToDoList;