import React, { useState } from 'react'
import './index.css';


const App = () => {

  let [todolist,setTodolist]=useState([])

  let saveToDoList=(event)=>{

    let toname=event.target.toname.value;
    // alert(toname)

    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]
      setTodolist(finalDolist)
    }
    else{
      alert("ToDo Name Already Exist...")
    }

    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist}
      setTodolist={setTodolist}
      
      />
    )
  })

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
          
        </ul>
      </div>
    </div>
  )
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}){
  let[status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
    // console.log(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)

  }
  return(

   
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}> {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}