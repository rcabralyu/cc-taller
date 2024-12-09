import { ID } from './shared'

export interface Task {
  id: number
  title: string
  completed: boolean
}

export interface TaskCreate extends Omit<Task, ID> {}
