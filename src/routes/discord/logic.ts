import { Client } from 'discord.js'
import { DISCORD_GUILD_ID, DISCORD_TOKEN, DISCORD_USER_ID } from '../../constants'

const client = new Client({
  intents: ['Guilds', 'GuildPresences', 'GuildMembers']
})

client.once('ready', () => {
  console.log(`Discord API Ready ${client.user?.tag}`)
})

void client.login(DISCORD_TOKEN)

async function getDiscord (): Promise<DiscordUser> {
  try {
    const guild = client.guilds.cache.get(DISCORD_GUILD_ID)
    const member = guild?.members.cache.get(DISCORD_USER_ID)
    const presence = member?.presence

    const parsed: DiscordUser = {
      avatar: (member?.user.displayAvatarURL() ?? null),
      id: (member?.id ?? null),
      presence: {
        status: (presence?.status ?? 'offline'),
        activity: (presence?.activities[0]?.name ?? null),
        details: (presence?.activities[0]?.details ?? null),
        state: (presence?.activities[0]?.state ?? null)
      }
    }

    return parsed
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching data from Discord')
  }
}

export { getDiscord }
