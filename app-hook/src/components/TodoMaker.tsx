import * as React from 'react'
import { useState } from 'react'
import { useStore } from '../models/index'

const TodoMaker = () => {
  const [, actions] = useStore('Todo')
  const [title, setTitle] = useState('')
  const changeHandler = (e:any) => {
    setTitle(e.target.value)
  }
  const submit = (e:any) => {
    if (e.which === 13) { // 回车
      actions.add(e.target.value)
      setTitle('')
    }
  }
  return (
    <input
      className="new-todo"
      value={title}
      placeholder="create a new one"
      onKeyDown={submit}
      onChange={changeHandler}
      autoFocus
    />
  )
}

export default TodoMaker
