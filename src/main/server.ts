import 'module-alias/register'
import 'dotenv/config'
import express from 'express'

const app = express()
app.listen(process.env.API_PORT || 5050, () => {
  console.log(`Server running at http://localhost:${process.env.API_PORT || 5050}`)
})
