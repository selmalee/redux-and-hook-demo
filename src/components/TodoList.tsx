import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

interface TodoListProps {
  todos: any[],
  onTodoClick: Function
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClickFunc={() => onTodoClick(index)} />
    ))}
  </ul>
)

// interface也能做到声明参数类型作用
TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
