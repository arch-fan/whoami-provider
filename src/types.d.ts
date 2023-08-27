// Discord
interface DiscordUser {
  avatar: string | null
  id: string | null
  presence: DiscordPresence
}

interface DiscordPresence {
  status: string | null
  activity: string | null
  details: string | null
  state: string | null
}

// Anilist
interface AnilistUser {
  animeCount: number
  avatar: string
}

// Twitter
interface TwitterCache {
  twitterData?: {
    data: any
    timestamp: number
  }
}

// Netease
interface NeteaseInfo {
  song?: string
  artist?: string
  cover?: string
}
