import OAuth1UserClient, { type UserV1 } from 'twitter-api-v2'
import { TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } from '../../constants'

const client = new OAuth1UserClient({
  appKey: TWITTER_CONSUMER_KEY,
  appSecret: TWITTER_CONSUMER_SECRET,
  accessToken: TWITTER_ACCESS_TOKEN,
  accessSecret: TWITTER_ACCESS_TOKEN_SECRET
})

const readOnlyClient = client.readOnly

export async function getTwitter (): Promise<UserV1 | Error> {
  try {
    const me = readOnlyClient.currentUser()
    console.log(me)
    return await me
  } catch (e: any) {
    return e
  }
}
