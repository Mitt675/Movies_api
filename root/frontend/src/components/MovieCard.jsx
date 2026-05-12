import "../css/Moviecard.css"
import { useState } from "react"
import {   addFavorites , delteFavorite } from "../services/favoriteapi"


function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = async() => {
        const token = localStorage.getItem("token")
        
         if(!token)   {
            alert('please signup or login first')
            return
         }

         try{
            if(isFavorite){
                await delteFavorite(movie.id,token)
                setIsFavorite(false)
            }
            else{
                await addFavorites(movie.id,token)
                setIsFavorite(true)
            }
         }
         catch(err){
            console.error(err)
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