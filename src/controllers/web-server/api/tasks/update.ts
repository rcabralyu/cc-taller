import { Router } from 'express'
import { update } from '../../../../services/tasks'
import { taskCreateSchema } from '../../../../validation-schemas/tasks'
import { StatusCodes } from 'http-status-codes'
import { validateId } from '../../../../validation-schemas/shared'

const router = Router()

router.route('/:id').put((req, res, next) => {
  try {
    const { error, value: params } = taskCreateSchema.validate(req.body)
    if (error != null) {
      throw error
    }
    const id = validateId(req.params.id)

    const response = update(id, params)
    res.statusCode = StatusCodes.OK
    res.send(response)
  } catch (e) {
    return next(e)
  }
})

export default router
