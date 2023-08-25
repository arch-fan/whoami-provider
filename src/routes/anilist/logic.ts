import { ANILIST_URL, ANILIST_USERNAME } from '../../constants'

const query = `
query ($name: String) {
    User (name: $name){

        avatar {
            medium
        }

        statistics {
            anime {
                count
            }
        }
    }
}
`

interface User {
  animeCount: number
  avatar: string
}

async function getAnilist (): Promise<User> {
  const variables = {
    name: ANILIST_USERNAME
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  }

  try {
    const stats = await fetch(ANILIST_URL, options)
    const parsed = await stats.json()
    const animeCount = parsed.data.User.statistics.anime.count
    const avatar = parsed.data.User.avatar.medium

    return { animeCount, avatar }
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching data from Anilist')
  }
}

export { getAnilist }
