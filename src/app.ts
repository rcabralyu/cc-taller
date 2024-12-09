import { start as startWebServer } from './controllers/web-server'

startWebServer()
  .catch(e => {
    console.error(e)
    process.exit(1)
  }
  )
