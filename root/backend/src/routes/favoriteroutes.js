const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/authmiddleware')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.post('/favorites', authMiddleware, async (req, res) => {
  const { movieId } = req.body
  const userId = req.userId

  try {
    const favorite = await prisma.Favorite.create({
      data: {
        movieId,
        userId
      }
    })

    res.status(201).json(favorite)
  }
  catch (err) {
    res.status(404).json("Movie already exist in favorites")
  }
})

router.get('/favorites', authMiddleware, async (req, res) => {
  const userId = req.userId

  const favorites = await prisma.Favorite.findMany({
    where: {
      userId
    }
  })
  res.status(200).json(favorites)
})

router.delete('/favorite/:id', authMiddleware, async (req, res) => {
  const userId = req.userId
  const movieId = req.params.movieId

  await prisma.Favorite.deleteMany({
    where: {
      userId,
      movieId
    }
  })
  res.status(200).json("movie delted from favorites successfully")
})

module.exports = router
