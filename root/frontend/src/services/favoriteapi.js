const api = 'http://localhost:5004/api'

export const addFavorites = async(movieId , token)=>{

    const res = fetch(`http://localhost:5004/api/favorites/${movieId}`,{
      method : "POST",
      headers:{
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`

      },
      body: JSON.stringify({movieId})
    })
    
    const data = await res.json()
    return data
  
}

export const delteFavorite = async(movieId,token)=>{
  const res = fetch(`http://localhost:5004/api/favorites/${movieId}`,{
    method : "DELTE",
    headers : {
      Authorization : `Bearer ${token}`
    }
  })

  const data = await res.json()
  return data
}

export const getFavorites = async(token)=>{
  const res = fetch(`http://localhost:5004/api/favorites`,{
    method : "GET",
    headers : {
      Authorization : `Bearer ${token}`
    }
  })

  const data = await res.json()
  return data
}


