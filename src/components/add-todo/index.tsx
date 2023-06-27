import React, { useState } from 'react';

interface AddTodoFormProperties {
  onSubmit: (todo: string) => void;
}

function AddTodoForm({ onSubmit }: AddTodoFormProperties) {
  const [todo, setTodo] = useState('');
  return (
    <div className='flex mb-4'>
      <input
        type='text'
        className='w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder='Add a todo'
        aria-label='Add a todo item'
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md'
        type='button'
        onClick={() => {
          onSubmit(todo);
          setTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;
