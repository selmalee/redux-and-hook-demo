import * as React from 'react'
import { useState } from 'react'
import { useStore } from '../models/index'

const TodoItem = (props: Todo) => {
  // 共享的actions（改变共享的状态）
  const [, actions] = useStore('Todo')
  // 组件状态
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(props.title)
  const status = editing ? 'editing' : (props.completed ? 'completed' : '')
  // 完成/未完成相关方法
  const toggle = () => {
    if (props.completed) {
      actions.undo(props.id)
    } else {
      actions.done(props.id)
    }
  }
  const destroy = () => {
    actions.destroy(props.id)
  }
  // 编辑相关方法
  const doubleClickHandler = () => {
    setEditing(true)
  }
  const inputHandler = (e:any) => {
    setTitle(e.target.value)
  }
  const submit = (e:any) => {
    if (e.which === 13) { // 回车
      setEditing(false)
      actions.edit({
        id: props.id,
        title: e.target.value
      })
    }
  }

  return (
    <li className={status}>
      {/* 正常/完成状态 */}
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          readOnly
          onClick={toggle}
          checked={props.completed}
        />
        <label onDoubleClick={doubleClickHandler}>{props.title}</label>
        <button className="destroy" onClick={destroy} />
      </div>
      {/* 编辑状态 */}
      <input
        className="edit"
        value={title}
        onChange={inputHandler}
        onKeyDown={submit}
      />
    </li>
  )
}

export default TodoItem
