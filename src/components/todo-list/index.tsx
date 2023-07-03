import React from 'react';
import { TodoItem, TodoItemProperties } from 'components/todo-item';

interface TodoListProperties {
  todos: Omit<TodoItemProperties, 'onToggleTodo'>[];
  reload: () => void;
}

function TodoList({ todos, reload }: TodoListProperties) {
  return (
    <ul className='bg-white rounded-lg shadow divide-y divide-gray-200'>
      {todos?.map((todo) => (
        <TodoItem
          ID={todo.ID}
          title={todo.title}
          completed={todo.completed}
          key={todo.title}
          CreatedAt={todo.CreatedAt}
          reload={reload}
        />
      ))}
    </ul>
  );
}

export default TodoList;
