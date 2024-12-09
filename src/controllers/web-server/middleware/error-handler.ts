import { Response, Request, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import { CustomException } from '../../../exceptions/exception'

export function errorHandler (err: any, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof Joi.ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).send({
      code: err.name,
      message: err.message
    })
  } else if (err instanceof CustomException) {
    res.status(err.statusCode).send({
      code: err.code,
      message: err.message
    })
  } else {
    res.status(500).send({
      code: 'error-generic'
    })
  }
}
