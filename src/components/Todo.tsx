import React from 'react'
import PropTypes from 'prop-types'

interface TodoProps {
  onClickFunc: (event?:any) => void,
  completed: boolean,
  text: string
}

const Todo = ({ onClickFunc, completed, text}: TodoProps) => (
  <li
    onClick={onClickFunc}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

// interface也能做到声明参数类型作用
Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
