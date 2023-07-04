/* eslint-disable import/no-cycle */
import { editTodo } from 'api/home-page/edit-todo';
import { TodoItemProperties } from 'components/todo-item';
import useApi from 'hooks/use-api';
import { useState } from 'react';
import Button from 'shared/components/button';
import Checkbox from 'shared/components/checkbox';
import Modal from 'shared/components/modal';

interface EditModalProperties {
  isEditModalOpen: boolean;
  todo: Omit<TodoItemProperties, 'reload'>;
  onClose: () => void;
  reload: () => void;
}

function EditTodo({ isEditModalOpen, todo, reload, onClose }: EditModalProperties) {
  const [todoState, setTodoState] = useState<Omit<TodoItemProperties, 'reload'>>(todo);

  const { request } = useApi({
    apiMethod: editTodo,
    onSuccess: () => {
      onClose();
      reload();
    }
  });

  const onChangeTodo = (data: { title?: string; completed?: boolean }) => {
    setTodoState({
      ...todoState,
      ...data
    });
  };

  return (
    <Modal isOpen={isEditModalOpen} onClose={onClose}>
      <input
        type='text'
        value={todoState.title}
        onChange={(event) => onChangeTodo({ title: event.target.value })}
        className='border border-gray-300 rounded-md p-2 mb-4 w-full'
      />
      <div className='flex items-center mb-4'>
        <span className='text-sm'>Completed:</span>
        <Checkbox
          id={`checkbox-${todo.ID}`}
          checked={todoState.completed}
          onChange={(event) => onChangeTodo({ completed: event.target.checked })}
          className='ml-2'
        />
      </div>
      <div className='flex justify-end'>
        <Button className='text-gray-500 hover:text-gray-600 mr-2' onClick={onClose}>
          Cancel
        </Button>
        <Button
          className='text-blue-500 hover:text-blue-600'
          onClick={() =>
            request({
              id: todoState.ID,
              title: todoState.title,
              completed: todoState.completed
            })
          }
        >
          Save
        </Button>
      </div>
    </Modal>
  );
}

export default EditTodo;
