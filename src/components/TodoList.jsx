import Form from "./Form"
import { useState } from "react"
import Todo from "./Todo"
import {v4 as uuidv4} from 'uuid'
uuidv4()

function TodoList() {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, { id: uuidv4(), task:todo, isEditing: false}]) 
  }

  return (
    <div className="container bg-blue-900 mt-20 p-8 rounded-md">
      <Form  createTodo = {createTodo}/>
      {
        todoValue.map((todo, index) => (
          <Todo key={index} task={todo} />
        ))
      }
    </div>
  )
}

export default TodoList