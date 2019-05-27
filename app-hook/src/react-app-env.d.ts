/// <reference types="react-scripts" />

interface Todo {
  title: string
  completed: boolean
  id: number
}

type Filter = 'All' | 'Active' | 'Completed'
