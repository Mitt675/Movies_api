
import MovieCard from "../components/MovieCard"
import { useState , useEffect } from "react"
import {getPopularmovies , searchMovies} from '../services/api'
import "../css/Home.css"

function Home() {

  const [searchQuery, setSearchQuery] = useState("")
  const [movies , setMovies] = useState([])
  const handleSearch = (event) => {
    event.preventDefault()
    alert(searchQuery)
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
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
    </div>
  )
}

export default Home