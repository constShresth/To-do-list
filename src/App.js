import { useState } from 'react';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const [input, setInput] = useState("")
  const [todoList, setTodolist] = useState([])

  const addTask = (event) => {
    setTodolist([...todoList, { task: input, completed: false }])
    setInput("")
    event.preventDefault();
  }

  const deleteTask = (taskToDelete) => {
    setTodolist(todoList.filter(obj => {
      return obj.task !== taskToDelete
    }))
  }

  const completeTask = (taskToComplete) => {
    setTodolist(todoList.map(obj => {
      return obj.task === taskToComplete ? { task: taskToComplete, completed: !obj.completed } : obj
    }))
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='input'>
        <form action="">
          <input type="text" placeholder='Task...' value={input} onChange={(e) => {
            setInput(e.target.value)
          }} />
          <button onClick={addTask}><AddIcon fontSize='small'/></button>
        </form>
      </div>
      {/* <hr /> */}
      <div className='list'>
        <ol>
          {todoList.map((obj, index) => {
            return (
              <div className="task">
                <li key={index} style={obj.completed ? { textDecoration: "line-through", opacity: 0.5 } : null}>{obj.task}</li>
                <button onClick={() => completeTask(obj.task)}><CheckIcon fontSize='small'/></button>
                <button onClick={() => deleteTask(obj.task)}><DeleteIcon fontSize='small'/></button>
              </div>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
