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
