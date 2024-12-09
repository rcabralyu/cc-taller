import { Router } from 'express'
import findAll from './find-all'
import create from './create'
import update from './update'
import remove from './remove'

const router = Router()

router.use('/', findAll)
router.use('/', create)
router.use('/', update)
router.use('/', remove)

export default router
