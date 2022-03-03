import express from 'express'
import router from './src/routes/routes'

const port = process.env.port || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => console.log('The server is starting...'))