import { Router, json } from 'express'
import { getAnilist } from './logic'

const anilist = Router()

anilist.use(json())

anilist.get('/', (req, res) => {
  getAnilist()
    .then((data) => res.json(data))
    .catch((error) => {
      throw new Error(error)
    })
})

export default anilist
