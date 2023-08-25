import express, { type ErrorRequestHandler } from 'express'
import { PORT } from './constants'

import discord from './routes/discord/endpoint'
import anilist from './routes/anilist/endpoint'
import twitter from './routes/twitter/endpoint'

import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'All working OK' })
})

app.use('/discord', discord)
app.use('/anilist', anilist)
app.use('/twitter', twitter)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`)
})
