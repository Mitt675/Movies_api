const  express = require('express')
const router = express.Router()
const moviecontroller = require('../controller/moviecontroller')

router.get('/popular', moviecontroller.getPopularMovies)
router.get('/search', moviecontroller.serachMovie)

module.exports = router