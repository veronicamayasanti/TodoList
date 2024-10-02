import React, { useState } from 'react'

function Edit({editTodo, task}) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="mb-4 font-primary w-fullf" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-white-900 p-4 w-[300px] text-black mb-8 rounded placeholder:text-gray-500"
        placeholder="Update your task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
        Update
      </button>
    </form>
  );
}

export default Edit