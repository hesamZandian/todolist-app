import { getTodos } from 'api/home-page/get-todos';
import AddTodoForm from 'components/add-todo';
import TodoList from 'components/todo-list';
import { usePageData } from 'hooks/use-page-data';
import Loading from 'shared/components/loading';

function Home() {
  const { data, pending, reload } = usePageData({
    apiMethod: getTodos
  });

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='max-w-md mx-auto p-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>Todo List</h1>
        <AddTodoForm reload={reload} />
        {pending ? <Loading /> : <TodoList reload={reload} todos={data?.data || []} />}
      </div>
    </div>
  );
}

export default Home;
