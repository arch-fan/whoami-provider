import express, { type ErrorRequestHandler } from 'express'
import { ENV, PORT } from './constants'

import discord from './routes/discord/endpoint'
import anilist from './routes/anilist/endpoint'
import twitter from './routes/twitter/endpoint'
import netease from './routes/netease/endpoint'

import morgan from 'morgan'

const app = express()

if (ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working' })
})

app.use('/discord', discord)
app.use('/anilist', anilist)
app.use('/twitter', twitter)
app.use('/netease', netease)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

app.use(errorHandler)

app.listen(PORT, () => {
  if (ENV === 'development') console.log(`API listening at http://localhost:${PORT}`)
})
