/// <reference types="react-scripts" />

interface TodoListProps {
  todos: any[],
  toggleTodo: Function
}

interface LinkProps {
  active: boolean,
  children?: string,
  onClickFunc: Function
}
