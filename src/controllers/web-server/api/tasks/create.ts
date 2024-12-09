import { Router } from 'express'
import { create } from '../../../../services/tasks'
import { taskCreateSchema } from '../../../../validation-schemas/tasks'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.route('/').post((req, res, next) => {
  try {
    const { error, value: params } = taskCreateSchema.validate(req.body)
    if (error != null) {
      throw error
    }
    const response = create(params)
    res.statusCode = StatusCodes.CREATED
    res.send(response)
  } catch (e) {
    return next(e)
  }
})

export default router
