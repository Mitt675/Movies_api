import "../css/Favorite.css"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { getFavorites } from "../services/favoriteapi"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"



function Favorite() {
  const [favorites, setFavorites] = useState([])
  // const navigate = useNavigate()
  const Username = localStorage.getItem("userName")

 useEffect(()=>{
  const loadFavorites = async()=>{
    const token = localStorage.getItem("token")

   try{ 
    
    if(!token) {
      alert("Get ur token already! Homie")
      // navigate("/")
    }

    
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
      <h3>{Username} love these</h3>
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