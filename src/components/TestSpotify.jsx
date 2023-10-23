import { getAccessToken } from '../app/lib/spotify'

// export const runtime = 'edge';

const TestSpotify = async () => {
  const fetchData = async () => {
    const { access_token } = await getAccessToken();
    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    return await res.json()
  }

  const recentlyPlayed = await fetchData()
  console.log(recentlyPlayed.items)

  return (
    <div>
      Testing spotify api: {recentlyPlayed.items[0].track.name}
    </div>
  )
}

export default TestSpotify