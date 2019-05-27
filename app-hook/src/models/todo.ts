import { Model } from "react-model"
import defaultTodos from '../assets/defaultTodos'

type State = {
  todos: Todo[]
  filter: Filter
  id: number
}

type ActionParams = {
  add: string
  edit: {
    id: number
    title: string
  }
  done: number
  allDone: undefined
  undo: number
  allUndo: undefined
  setFilter: Filter
  clearCompleted: undefined
  destroy: number
}

const model: NextModelType<State, ActionParams> = {
  state: {
    todos: defaultTodos,
    filter: "All",
    id: 9
  },
  // 可以返回部分状态或改变状态的方法
  actions: {
    add: (title:string) => {
      return state => {
        state.todos.push({
          title,
          completed: false,
          id: state.id
        })
        state.id += 1
      }
    },
    edit: info => {
      return state => {
        state.todos.forEach(todo => {
          if (todo.id === info.id) {
            todo.title = info.title
          }
        })
      }
    },
    done: (id:number) => {
      return state => {
        state.todos.forEach(todo => {
          if (todo.id === id) {
            todo.completed = true
          }
        })
      }
    },
    allDone: () => {
      return state => {
        state.todos.map(todo => (todo.completed = true))
      }
    },
    undo: (id:number) => {
      return state => {
        state.todos.forEach(todo => {
          if (todo.id === id) {
            todo.completed = false
          }
        })
      }
    },
    allUndo: () => {
      return state => {
        state.todos.map(todo => (todo.completed = false))
      }
    },
    setFilter: (filter:Filter) => {
      return { filter }
    },
    clearCompleted: (_, { state }) => {
      return {
        todos: state.todos.filter(todo => !todo.completed)
      }
    },
    destroy: (id, { state }) => {
      return {
        todos: state.todos.filter(todo => todo.id !== id)
      }
    }
  }
}

export default Model(model)
