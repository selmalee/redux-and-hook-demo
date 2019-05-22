import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos:any[], filter:string) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
// 指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state:any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
// 分发 action, 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
const mapDispatchToProps = (dispatch:any) => ({
  toggleTodo: (id:number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList as React.SFC<TodoListProps>)
