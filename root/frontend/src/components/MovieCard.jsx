import "../css/Moviecard.css"
import { useState, useEffect } from "react"

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        setIsFavorite(favorites.some(fav => fav.id === movie.id))
    }, [movie.id])

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav.id !== movie.id)
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            setIsFavorite(false)
        } else {
            const newFavorites = [...favorites, movie]
            localStorage.setItem('favorites', JSON.stringify(newFavorites))
            setIsFavorite(true)
        }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard