import { Router } from 'express'
import { findAll } from '../../../../services/tasks'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.route('/').get((req, res, next) => {
  try {
    const response = findAll()
    res.statusCode = StatusCodes.OK
    res.send(response)
  } catch (e) {
    return next(e)
  }
})

export default router
