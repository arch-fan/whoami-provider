import OAuth1UserClient, { type UserV1 } from 'twitter-api-v2'
import { TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } from '../../constants'

const client = new OAuth1UserClient({
  appKey: TWITTER_CONSUMER_KEY,
  appSecret: TWITTER_CONSUMER_SECRET,
  accessToken: TWITTER_ACCESS_TOKEN,
  accessSecret: TWITTER_ACCESS_TOKEN_SECRET
})

const readOnlyClient = client.readOnly

const cache: TwitterCache = {}

export async function getTwitter (): Promise<UserV1 | Error> {
  try {
    const cacheKey = 'twitterData'
    const currentTime = Date.now()
    const cacheDuration = 60 * 60 * 1000 // 1 hour in milliseconds

    if ((cache[cacheKey] != null) && currentTime - cache[cacheKey].timestamp < cacheDuration) {
      return cache[cacheKey].data
    }

    const me = await readOnlyClient.currentUser()

    cache[cacheKey] = {
      data: me,
      timestamp: currentTime
    }

    return me
  } catch (e: any) {
    return e
  }
}
