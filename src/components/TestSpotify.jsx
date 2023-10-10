'use client'

import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../app/lib/spotify'

const TestSpotify = () => {
  // const recentlyPlayed = async () => {
  //   const { access_token } = await getAccessToken();
  //
  //   return fetch("https://api.spotify.com/v1/me/player/recently-played", {
  //     headers: {
  //       Authorization: `Bearer ${access_token}`,
  //     },
  //   });
  // };

  useEffect(() => {
    const fetchData = async () => {
      const { access_token } = await getAccessToken();
      const res = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      const data = await res.json()
      setSpotify(data)
    }
    fetchData()
  }, [])
  const [spotify, setSpotify] = useState()
  console.log(spotify)

  return (
    <div>
      Testing spotify api
    </div>
  )
}

export default TestSpotify