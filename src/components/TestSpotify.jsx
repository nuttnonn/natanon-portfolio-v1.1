import { getAccessToken } from '../app/lib/spotify'

const TestSpotify = async () => {
  const fetchData = async () => {
    const { access_token } = await getAccessToken();
    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    const data = await res.json()
    return data
  }

  const data = await fetchData()
  console.log(data)

  return (
    <div>
      Testing spotify api: {data.items[0].track.name}

    </div>
  )
}

export default TestSpotify