import './App.css';
import TodoList from './component/TodoList'

function App() {
  const todos = ['9ouem e sbeh ', 'a8sal wajhek'];
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
