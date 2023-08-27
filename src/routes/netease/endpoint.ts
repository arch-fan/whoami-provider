import { Router, json } from 'express'
import { NETEASE_AUTH_TOKEN } from '../../constants'

const netease = Router()

netease.use(json())

let neteaseInfo: NeteaseInfo = {}
let lastUpdated: number = Date.now()

const resetInfo = (): void => {
  if (Date.now() - lastUpdated >= 15000) {
    neteaseInfo = {}
  }
}

netease.get('/', (req, res) => {
  resetInfo()
  if (Object.keys(neteaseInfo).length === 0) {
    res.status(400).json({ Empty: 'No song provided' })
  } else {
    res.status(200).json(neteaseInfo)
  }
})

netease.post('/', (req, res) => {
  const authToken = req.header('Authorization')
  if (authToken === NETEASE_AUTH_TOKEN) {
    const { song, artist, cover, id }: NeteaseInfo = req.body

    neteaseInfo = { song, artist, cover, id }
    lastUpdated = Date.now()
    res.status(200).json({ Updated: 'Info has been updated' })
  } else {
    res.status(401).json({ Error: 'Forbidden' })
  }
})

export default netease
