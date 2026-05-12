const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/authmiddleware')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.post('/favorites', authMiddleware, async (req, res) => {
  const { movieId } = req.body
  const userId = req.userId

  try {
    const Favorite = await prisma.favorite.create({
      data: {
        movieId,
        userId
      }
    })

    res.status(201).json(Favorite)
    
  }
  catch (err) {
    res.status(404).json("Movie already exist in favorites")
  }
})

router.get('/favorites', authMiddleware, async (req, res) => {
  const userId = req.userId

  const favorites = await prisma.favorite.findMany({
    where: {
      userId
    }
  })
  res.status(200).json(favorites)
})

router.delete('/favorites/:movieId', authMiddleware, async (req, res) => {

  const userId = req.userId
  const movieId = req.params.movieId

  await prisma.favorite.deleteMany({
    where: {
      userId,
      movieId
    }
  })

  res.status(200).json("movie deleted from favorites")
})
module.exports = router
