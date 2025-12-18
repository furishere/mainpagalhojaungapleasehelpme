import { useState } from "react";

function App(){
  const[task, setTask] = useState("")
  const[tasks, setTasks] = useState([])

  return <div>
    <Header />
    <Add task={task}
    setTask={setTask}
    tasks={tasks}
    setTasks={setTasks}
    /> 
    <EmptyState 
    tasks={tasks}
    />

  </div>
}

function EmptyState({tasks}){
  if(tasks.length === 0){
    return <div style={{display :"flex", justifyContent : "center"}}>
      <div>
        <h2> No Task here</h2>
      </div>
    </div>
  }
  
}

function Header(){

  return <div style={{display :"flex", justifyContent : "center"}}>
    <div>
      <h1> SMART TO-DO LIST</h1>
    </div>
  </div>
}

  function Add({task, tasks, setTask, setTasks}){

    function isComplete(index){
      setTasks(tasks.filter((i) => i === index))
    }
    
    const addTask = () => {
      
      if(task.trim() === "") return

      setTasks([...tasks, task])

      setTask("")
    }

    function removeTask(index){
      setTasks(tasks.filter((_, i) => i !== index))
    }

    return <div style={{display : "flex" , justifyContent : "center"}}>
      <div>
    <input type="text" placeholder="add here" value={task} onChange={(e) => setTask(e.target.value)} />

    <button onClick={addTask}>Add </button>

    <ul>
    {tasks.map((t, index) => (
      <li key={index}>{t}
      <button onClick={() => removeTask(index)}>delete</button>
      <button onClick={() => isComplete(index)}>Complete</button>
      </li>
    ))}  
    </ul> 
    </div>

    </div>
  }
  

export default App;
