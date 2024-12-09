import { TaskNotFound } from '../exceptions/tasks'
import { Task, TaskCreate } from '../interfaces/task'

const tasks: Task[] = []

export function create (params: TaskCreate): Task {
  const id = tasks.length + 1
  const task = {
    id,
    ...params
  }
  tasks.push(task)
  return task
}

export function findAll (): Task[] {
  return tasks
}

export function update (id: number, params: TaskCreate): Task {
  const task = tasks.find(task => task.id === id)
  if (task == null) {
    throw new TaskNotFound()
  }
  Object.assign(task, params)
  return task
}

export function remove (id: number): void {
  const taskIndex = tasks.findIndex(task => task.id === id)
  if (taskIndex === -1) {
    throw new TaskNotFound()
  }
  tasks.splice(taskIndex, 1)
}
