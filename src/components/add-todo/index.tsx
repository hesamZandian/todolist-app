import { addTodo } from 'api/home-page/add-todo';
import useApi from 'hooks/use-api';
import React, { useState } from 'react';

interface Properties {
  reload: () => void;
}

function AddTodoForm({ reload }: Properties) {
  const [todo, setTodo] = useState('');
  const { request } = useApi({
    apiMethod: addTodo,
    onSuccess: () => {
      setTodo('');
      reload();
    }
  });
  return (
    <form
      className='flex mb-6'
      onSubmit={(event) => {
        event.preventDefault();
        request({ title: todo, completed: false });
      }}
    >
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
        type='submit'
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
