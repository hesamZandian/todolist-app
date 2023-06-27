import Button from 'shared/components/button';
import Checkbox from 'shared/components/checkbox';

export interface TodoItemProperties {
  title: string;
  completed: boolean;
}

export function TodoItem({ title, completed }: TodoItemProperties) {
  return (
    <li className='flex items-center justify-between py-4 px-6' key={title}>
      <div className='flex items-center justify-center'>
        <Checkbox className='text-blue-500' checked={completed} />
        <span className='flex-grow ml-2'>{title}</span>
      </div>
      <div className='flex items-center space-x-2'>
        <Button className='text-red-500 hover:text-red-600'>Delete</Button>
      </div>
    </li>
  );
}
