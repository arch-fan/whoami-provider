import { Router, json } from 'express'
import { getTwitter } from './logic'

const twitter = Router()

twitter.use(json())

twitter.get('/', (req, res) => {
  getTwitter()
    .then((data) => res.json(data))
    .catch((error) => {
      throw new Error(error)
    })
})

export default twitter
