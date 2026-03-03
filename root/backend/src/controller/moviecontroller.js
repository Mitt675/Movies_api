const axios = require('axios')

const API_KEY = process.env.api_key
const BASE_URL = process.env.base_url

console.log(API_KEY);
console.log(BASE_URL);

exports.getPopularMovies = async (req, res) => {
  try {

    
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY }
    });

    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.serachMovie = async (req,res) =>{
  try{
    const query = req.query.q 
    const responsne = await axios.get(`${BASE_URL}/search/movie`,{
      params : {api_key : API_KEY , query}
    })
    res.json(responsne.data.results)
  }
  catch(err){
    return res.status(500).json(err.message)
  }
}

