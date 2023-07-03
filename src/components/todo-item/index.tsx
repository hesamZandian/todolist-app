/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { deleteTodo } from 'api/home-page/delete-todo';
import useApi from 'hooks/use-api';
import Button from 'shared/components/button';
import Checkbox from 'shared/components/checkbox';
import { formatDate } from 'utils/format-date';

import EditTodo from 'components/edit-todo';

export interface TodoItemProperties {
  ID: number;
  title: string;
  completed: boolean;
  CreatedAt: string;
  reload: () => void;
}

export function TodoItem({
  ID,
  title,
  completed,
  CreatedAt,
  reload
}: TodoItemProperties) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { request } = useApi({
    apiMethod: deleteTodo,
    onSuccess: () => {
      reload();
    }
  });

  const handleEdit = () => setIsEditModalOpen(!isEditModalOpen);

  return (
    <li className='flex items-center justify-between py-4 px-6' key={title}>
      <div className='flex items-center justify-center'>
        <Checkbox className='text-blue-500' checked={completed} />
        <span className='flex-grow ml-2'>{title}</span>
      </div>
      <div className='flex items-center space-x-2'>
        <span className='text-gray-500 text-sm'>{formatDate(CreatedAt)}</span>
        <Button
          className='text-red-500 hover:text-red-600'
          onClick={() => request({ id: ID })}
        >
          Delete
        </Button>
        <Button className='text-blue-500 hover:text-blue-600' onClick={handleEdit}>
          Edit
        </Button>
        <EditTodo
          isEditModalOpen={isEditModalOpen}
          key={title}
          onClose={() => setIsEditModalOpen(false)}
          todo={{
            title,
            completed,
            ID,
            CreatedAt
          }}
          reload={reload}
        />
      </div>
    </li>
  );
}
