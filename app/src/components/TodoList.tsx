import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

interface TodoListProps {
  todos: any[],
  toggleTodo: Function
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClickFunc={() => toggleTodo(index)} />
    ))}
  </ul>
)

// interface也能做到声明参数类型作用
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
