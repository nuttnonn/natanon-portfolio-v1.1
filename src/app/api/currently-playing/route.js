import { currentlyPlaying } from '../../lib/spotify'

// export const runtime = 'edge';

export async function GET() {
  const response = await currentlyPlaying();
  const { items } = await response.json();

  const currently = {
    trackName: items.item.name,
    trackUrl: items.item.external_urls.spotify,
    artist: items.item.artists.map((_artist) => _artist.name).join(', '),
    coverImage: items.item.album.images[2].url,
  }

  return new Response(JSON.stringify({ currently }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}