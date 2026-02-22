import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularmovies, searchMovies } from "../services/api"
import "../css/Home.css"

function Home() {

  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])

  // Load popular movies on first render
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getPopularmovies()
        setMovies(popularMovies || [])
      } catch (error) {
        console.error("Error loading movies:", error)
      }
    }

    loadMovies()
  }, [])

  // Handle search
  const handleSearch = async (event) => {
    event.preventDefault()

    if (!searchQuery.trim()) return

    try {
      const results = await searchMovies(searchQuery)
      setMovies(results || [])
    } catch (error) {
      console.error("Error searching movies:", error)
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No movies found.</p>
        )}
      </div>
    </div>
  )
}

export default Home
