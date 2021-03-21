import React from 'react'
import TodoList from './containers/TodoList'
import TodoListRedux from './containers/TodoListRedux'

function App() {
  return (
    <div className="container" data-test="container" title="dell lee">
      {/*<TodoList />*/}
      <TodoListRedux />
    </div>
  );
}

export default App;
