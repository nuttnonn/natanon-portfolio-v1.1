import { recentlyPlayed } from '../../lib/spotify'

export async function GET() {
  const response = await recentlyPlayed();
  const { items } = await response.json();

  const recently = {
    trackName: items[0].track.name,
    trackUrl: items[0].track.external_urls.spotify,
    artist: items[0].track.artists.map((_artist) => _artist.name).join(', '),
    coverImage: items[0].track.album.images[2],
  }

  return new Response(JSON.stringify({ recently }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}