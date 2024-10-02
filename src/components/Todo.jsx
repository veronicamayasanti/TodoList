import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
  return (
    <div className="flex justify-between items-center bg-gray-600 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'line-through line-color-green' : ''}`}>{task.task}   </p>
      <div className="flex items-center gap-x-4">

        <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <BsFillTrashFill
          className="text-xl"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default Todo