import { deleteTodo } from 'api/home-page/delete-todo';
import useApi from 'hooks/use-api';
import Button from 'shared/components/button';
import Checkbox from 'shared/components/checkbox';

export interface TodoItemProperties {
  ID: number;
  title: string;
  completed: boolean;
  reload: () => void;
}

export function TodoItem({ ID, title, completed, reload }: TodoItemProperties) {
  const { request } = useApi({
    apiMethod: deleteTodo,
    onSuccess: () => {
      reload();
    }
  });

  return (
    <li className='flex items-center justify-between py-4 px-6' key={title}>
      <div className='flex items-center justify-center'>
        <Checkbox className='text-blue-500' checked={completed} />
        <span className='flex-grow ml-2'>{title}</span>
      </div>
      <div className='flex items-center space-x-2'>
        <Button
          className='text-red-500 hover:text-red-600'
          onClick={() => request({ id: ID })}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
