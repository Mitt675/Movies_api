import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularmovies, searchMovies } from "../services/api"
import "../css/Home.css"


function Home() {

  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const Username = localStorage.getItem("userName")
  
  

  const loadPopular = async()=>{
    try{
      const popularMovies = await getPopularmovies()
      setMovies(popularMovies || [])
    }
    catch(err){
      console.error(err)
    }
  }
  
// useeffect cuase the component to load only once in start 
  useEffect(()=>{
    loadPopular()
  },[])
  
  
  // Handle search
  const handleSearch = async (event) => {
    event.preventDefault()

    if (!searchQuery.trim()) {
      loadPopular()
    } 

    try {
      const results = await searchMovies(searchQuery)
      setMovies(results || [])
    } catch (error) {
      console.error("Error searching movies:", error)
    }
  }

  return (

   
    
    <div className="home">
      <h3>whatUp, {Username}!</h3>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value
            setSearchQuery(value)
          if(value == ''){
            loadPopular()
          }
          }
          }
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
          <p style={{ textAlign: "center" }}>Fetching..</p>
        )}
      </div>
    </div>
  )
}

export default Home
