import React from 'react';
import { TodoItem, TodoItemProperties } from 'components/todo-item';

interface TodoListProperties {
  todos: Omit<TodoItemProperties, 'onToggleTodo'>[];
}

function TodoList({ todos }: TodoListProperties) {
  return (
    <ul className='bg-white rounded-lg shadow divide-y divide-gray-200'>
      {todos.map((todo) => (
        <TodoItem title={todo.title} completed={todo.completed} key={todo.title} />
      ))}
    </ul>
  );
}

export default TodoList;
