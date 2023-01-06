import express from 'express'
import 'dotenv/config'

import { router } from './routes.js'

const port = process.env.PORT || 8080
const app = express()

// VERSIONING
app.use('/api/v1', router)

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Server started listening on port: ${port}`)
})

export { app }
