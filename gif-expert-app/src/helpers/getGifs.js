export const getGifs = async (category) => {
  const api_key = 'fJ9W8aX51c3WqKXGBzbkr5WtyTlgPUXf'

  const base_url = 'https://api.giphy.com/v1/gifs/search'

  const endpoint = `${base_url}?api_key=${api_key}&q=${category}&limit=10`
  const resp = await fetch(endpoint)
  const { data } = await resp.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}
