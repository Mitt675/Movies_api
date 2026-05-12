import "../css/Favorite.css"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { getFavorites } from "../services/favoriteapi"

function Favorite() {
  const [favorites, setFavorites] = useState([])

 useEffect(()=>{
  const loadFavorites = async()=>{
    const token = localStorage.getItem.token

    if(!token) return

    try{
        const data = await getFavorites(token)
        setFavorites(data)
    }
    catch(err){
      console.error(err)
    }
  }

  loadFavorites()

 },[])

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