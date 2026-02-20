const API_KEY = "4e898a61ba09bbd15f2db93637a9d728"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularmovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
  const data = await response.json()
  return data.results
}