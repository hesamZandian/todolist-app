import logo from "logo.svg";
import "App.css";

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      <form className="flex mb-4">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
        >
          Add
        </button>
      </form>

      <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
        <li className="flex items-center justify-between py-4 px-6">
          <span className="flex-grow">Todo item 1</span>
          <div className="flex items-center space-x-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Completed</span>
            </label>
            <button className="text-red-500 hover:text-red-600">Delete</button>
          </div>
        </li>
        <li className="flex items-center justify-between py-4 px-6">
          <span className="flex-grow">Todo item 2</span>
          <div className="flex items-center space-x-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Completed</span>
            </label>
            <button className="text-red-500 hover:text-red-600">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
