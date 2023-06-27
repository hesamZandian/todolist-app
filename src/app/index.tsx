import AddTodoForm from 'components/add-todo';
import TodoList from 'components/todo-list';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { title: 'Todo 1', completed: false },
    { title: 'Todo 2', completed: true }
  ]);
  const onAddNewTodo = (todo: string) => {
    setTodos([...todos, { title: todo, completed: false }]);
  };

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='max-w-md mx-auto p-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>Todo List</h1>
        <AddTodoForm onSubmit={onAddNewTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
