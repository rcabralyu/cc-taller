import { Router } from 'express'
import { remove } from '../../../../services/tasks'
import { StatusCodes } from 'http-status-codes'
import { validateId } from '../../../../validation-schemas/shared'

const router = Router()

router.route('/:id').delete((req, res, next) => {
  try {
    const id = validateId(req.params.id)

    remove(id)
    res.statusCode = StatusCodes.NO_CONTENT
    res.send()
  } catch (e) {
    return next(e)
  }
})

export default router
