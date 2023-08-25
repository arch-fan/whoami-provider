import { Router, json } from 'express'
import { getDiscord } from './logic'

const discord = Router()

discord.use(json())

discord.get('/', (req, res) => {
  getDiscord()
    .then((data) => res.json(data))
    .catch((error) => {
      throw new Error(error)
    })
})

export default discord
