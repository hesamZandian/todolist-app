// import AddTodoForm from 'components/add-todo';
// import TodoList from 'components/todo-list';
import { PAGES_ROUTES } from 'pages/pages-routes';
import { Route, Routes as Switch, BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from 'utils/scroll-to-top';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {PAGES_ROUTES.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
