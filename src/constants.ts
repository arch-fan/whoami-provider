import { config } from 'dotenv'
config()

// Node & Express
export const ENV = process.env.ENV ?? 'production'
export const PORT = process.env.PORT ?? 3000

// Discord
export const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID ?? ''
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN ?? ''
export const DISCORD_USER_ID = process.env.DISCORD_USER_ID ?? ''

// Anilist
export const ANILIST_URL = 'https://graphql.anilist.co'
export const ANILIST_USERNAME = process.env.ANILIST_USERNAME ?? ''

// Twitter
export const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY ?? ''
export const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET ?? ''
export const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN ?? ''
export const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET ?? ''

// Netease
export const NETEASE_AUTH_TOKEN = process.env.NETEASE_AUTH_TOKEN ?? ''
