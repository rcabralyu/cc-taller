import { Router } from 'express'
import tasks from './tasks'

const router = Router()

router.use('/tasks', tasks)

router.all('*', function (req, res) {
  res.statusCode = 404
  res.send({
    message: 'Missing URL'
  })
})

export default router
