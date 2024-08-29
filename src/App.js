
import './App.css';
import { useState } from 'react';
import Todolist from './Components/Todolist';
import TodoInput from './Components/TodoInput';
function App() {
const[listTodo,setListTodo]=useState([])

let addList=(inputText)=>{
  if(inputText!==''){
  setListTodo([...listTodo,inputText])
  }
}
const deleteItem=(key)=>{
  let newTodo=[...listTodo]
  newTodo.splice(key,1);
  setListTodo([...newTodo])
}
  return (
    <div className="main-container">
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>Todo</h1>
        <hr/>
      {listTodo.map((listitem,i)=>{
        return(
          <Todolist key={i} index={i} item={listitem} deleteItem={deleteItem}/>
        );
      })}
      </div>

    </div>
  );
}

export default App;
