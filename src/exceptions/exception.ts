import { StatusCodes } from 'http-status-codes'

export class CustomException extends Error {
  constructor (public statusCode: StatusCodes, message: string, public code: string) {
    super(message)
  }
}
