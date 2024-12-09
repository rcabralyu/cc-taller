import express from 'express'
import api from './api/router'
import { errorHandler } from './middleware'
import cors from 'cors'
import { Server } from 'http'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', api)
app.use(errorHandler)

const PORT = process.env.PORT ?? 3000

export async function start (): Promise<Server> {
  return app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
  })
}
