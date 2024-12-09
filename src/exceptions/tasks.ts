import { StatusCodes } from 'http-status-codes'
import { CustomException } from './exception'

export class TaskNotFound extends CustomException {
  constructor (message: string = 'Task not found') {
    super(StatusCodes.NOT_FOUND, message, 'error-task-not-found')
  }
}
