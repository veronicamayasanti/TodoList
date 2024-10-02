import Form from "./Form"
import { useEffect, useState } from "react"
import Todo from "./Todo"
import {v4 as uuidv4} from 'uuid'
import Edit from "./Edit"
uuidv4()

function TodoList() {
  const [todoValue, setTodoValue] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return (
      saveTodos !== null ? JSON.parse(saveTodos) : []
  )
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoValue))
  }, [todoValue])

  const createTodo = (todo) => {
    setTodoValue([...todoValue, { id: uuidv4(), task:todo, isEditing: false}]) 
  }

  const deleteTodo = id => {
    setTodoValue(todoValue.filter(todo => todo.id !== id))
  }

const editTodo = id => {
  setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
}

const editTask = (task, id) => {
  setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
}

const toggleComplete = id => {
  setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
}



  return (
    <div className="container mx-auto bg-green-400 mt-10 p-8 rounded-md w-[500px]">
      <h2 className="text-2xl font-bold mb-4">To-Do List By MayaDev</h2>
      <Form createTodo={createTodo} />
      {todoValue.map((todo, index) =>
        todo.isEditing ? (
          <Edit key={index} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default TodoList