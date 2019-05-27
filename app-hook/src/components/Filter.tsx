import * as React from 'react'
import { useStore } from '../models/index' // useStore: (modelName[, depActions]) => [state, actions]

const Filter = () => {
  const [state, actions] = useStore('Todo')
  return (
    <ul className="filters">
      { ['All', 'Active', 'Completed'].map(filter => (
        <li key={filter}>
        <span
          className={filter === state.filter ? 'selected': ''}
          onClick={() => actions.setFilter(filter as Filter)}
          >{filter}</span>
        </li>
      ))}
    </ul>
  )
}

export default Filter
