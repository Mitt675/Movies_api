
const BASE_URL = "http://localhost:5004/movie"

export const getPopularmovies = async () => {
  const response = await fetch(`${BASE_URL}/popular`)
  const data = await response.json()
  return data
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/?q=${encodeURIComponent(query)}`
  )
  const data = await response.json()
  return data
}