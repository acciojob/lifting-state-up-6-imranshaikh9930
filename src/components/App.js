
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child"

const App = () => {
  const [todos,setTodos] = useState([
    {id:1,text:"Learn React",isCompleted:false},
    {id:2,text:"Build a React app",isCompleted:false},
    {id:3,text:"Deploy the React app",isCompleted:false}
  ]);

  const  handleComplete = (id)=>{

    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo,isCompleted:true}:todo))
  }

   return (
    <div>
      <h1>Parent Component</h1>
    <Child  todos={todos} setTodos = {setTodos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
