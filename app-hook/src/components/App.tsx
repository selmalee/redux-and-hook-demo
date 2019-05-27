import React from 'react';
import { useStore } from '../models/index'
import Filter from './Filter'
import TodoMaker from './TodoMaker'
import TodoList from './TodoList'

const App: React.FC = () => {
  const [state, actions] = useStore('Todo')
  const incompletedCnt = state.todos.filter(todo => !todo.completed).length
  const clearHandler = () => {
    actions.clearCompleted()
  }
  const toggleAllHandler = () => {
    if (incompletedCnt === 0 && state.todos.length > 0) {
      actions.allUndo()
    } else {
      actions.allDone()
    }
  }
  return (
    <div className="todoapp">
      {/* header */}
      <div className="header">
        <h1>todo List</h1>
        <TodoMaker />
      </div>
      {/* main */}
      <section className="main">
        <TodoList />
      </section>
      <div className="toggle-all">
        <input
          type="checkbox"
          readOnly
          checked={incompletedCnt === 0 && state.todos.length > 0}
          onClick={toggleAllHandler}
        />
        <label>Mark all as complete</label>
      </div>
      {/* footer */}
      <footer className="footer">
        <span className="todo-count">
          <strong>{incompletedCnt}</strong> item left
        </span>
        <Filter />
        <button className="clear-completed" onClick={clearHandler}>Clear completed</button>
      </footer>
    </div>
  );
}

export default App;
