import "../css/Favorite.css"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

function Favorite() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const loadFavorites = () => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      setFavorites(savedFavorites)
    }

    loadFavorites()

    const handleStorageChange = () => {
      loadFavorites()
    }

    window.addEventListener('storage', handleStorageChange)

    const interval = setInterval(handleStorageChange, 1000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="favorite-page">
      <h1>My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <p>No favorite movies yet. Start adding some from the home page!</p>
        </div>
      )}
    </div>
  )
}

export default Favorite