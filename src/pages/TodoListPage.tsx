import React from 'react';
import { TodoList } from '../components/TodoList'; // Use named import

const TodoListPage: React.FC = () => {
  console.log('TodoListPage rendered'); // Debugging log

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List</h1>
      <TodoList /> {/* Use the TodoList component */}
    </div>
  );
};

export default TodoListPage;
